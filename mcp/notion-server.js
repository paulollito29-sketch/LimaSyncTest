#!/usr/bin/env node
require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const server = new Server({ name: 'notion', version: '1.0.0' }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'notion_search',
        description: 'Search pages, databases, and other items in Notion',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Search query' },
            page_size: { type: 'number', description: 'Number of results (max 100)', default: 10 },
          },
        },
      },
      {
        name: 'notion_read_page',
        description: 'Read the content of a Notion page or database',
        inputSchema: {
          type: 'object',
          properties: {
            page_id: { type: 'string', description: 'Page ID (32-character hex string or URL with hyphenated ID)' },
          },
          required: ['page_id'],
        },
      },
      {
        name: 'notion_query_database',
        description: 'Query a Notion database for its entries',
        inputSchema: {
          type: 'object',
          properties: {
            database_id: { type: 'string', description: 'Database ID' },
            page_size: { type: 'number', description: 'Number of results (max 100)', default: 10 },
            filter: { type: 'object', description: 'Optional filter object' },
            sorts: { type: 'array', description: 'Optional sort array', items: { type: 'object' } },
          },
          required: ['database_id'],
        },
      },
      {
        name: 'notion_create_page',
        description: 'Create a new page in Notion',
        inputSchema: {
          type: 'object',
          properties: {
            parent_id: { type: 'string', description: 'Parent page or database ID' },
            parent_type: { type: 'string', enum: ['page_id', 'database_id'], description: 'Parent type' },
            title: { type: 'string', description: 'Page title' },
            properties: { type: 'object', description: 'Additional properties as JSON object' },
            content: { type: 'array', description: 'Children blocks (array of block objects)', items: { type: 'object' } },
          },
          required: ['parent_id', 'parent_type', 'title'],
        },
      },
      {
        name: 'notion_append_blocks',
        description: 'Append blocks to an existing Notion page',
        inputSchema: {
          type: 'object',
          properties: {
            block_id: { type: 'string', description: 'Block ID to append to' },
            children: { type: 'array', description: 'Array of block objects', items: { type: 'object' } },
          },
          required: ['block_id', 'children'],
        },
      },
      {
        name: 'notion_get_user',
        description: 'Get current Notion user information',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'notion_search':
        const searchRes = await notion.search({
          query: args.query,
          page_size: args.page_size || 10,
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(searchRes.results, null, 2) }],
        };

      case 'notion_read_page':
        const pageRes = await notion.pages.retrieve({ page_id: args.page_id });
        const blocksRes = await notion.blocks.children.list({ block_id: args.page_id });
        return {
          content: [
            { type: 'text', text: `Page metadata:\n${JSON.stringify(pageRes, null, 2)}` },
            { type: 'text', text: `Page content:\n${JSON.stringify(blocksRes.results, null, 2)}` },
          ],
        };

      case 'notion_query_database':
        const dbRes = await notion.databases.query({
          database_id: args.database_id,
          page_size: args.page_size || 10,
          filter: args.filter,
          sorts: args.sorts,
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(dbRes.results, null, 2) }],
        };

      case 'notion_create_page': {
        const properties = {};
        properties.title = { title: [{ text: { content: args.title } }] };
        if (args.properties) {
          Object.assign(properties, args.properties);
        }

        const parent = {};
        parent[args.parent_type === 'database_id' ? 'database_id' : 'page_id'] = args.parent_id;

        const createOpts = {
          parent,
          properties,
        };
        if (args.content) {
          createOpts.children = args.content;
        }

        const createRes = await notion.pages.create(createOpts);
        return {
          content: [{ type: 'text', text: JSON.stringify(createRes, null, 2) }],
        };
      }

      case 'notion_append_blocks':
        const appendRes = await notion.blocks.children.append({
          block_id: args.block_id,
          children: args.children,
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(appendRes, null, 2) }],
        };

      case 'notion_get_user':
        const userRes = await notion.users.me();
        return {
          content: [{ type: 'text', text: JSON.stringify(userRes, null, 2) }],
        };

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{ type: 'text', text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
