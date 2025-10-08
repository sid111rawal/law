import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';
import { codeInput } from '@sanity/code-input';
import { table } from '@sanity/table';

export default defineConfig({
  name: 'default',
  title: 'Lawgical Station Blog',

  projectId: '7hpvcl7y',
  dataset: 'production',

  basePath: '/studio', // Access Sanity Studio at yoursite.com/studio

  plugins: [
    visionTool(), // GROQ query tool
    codeInput(), // Code block support
    table(), // Table support
  ],

  schema: {
    types: schemaTypes,
  },
});
