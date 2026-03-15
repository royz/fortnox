import { defineConfig } from '@hey-api/openapi-ts';
import path from 'node:path';

export default defineConfig({
  input: path.join(import.meta.dirname, "openapi.json"),
  output: {
    path: './hey-api',
    postProcess: ['prettier', 'eslint'],
  },
  plugins: [
    {
      name: "zod",
      requests: true,
      responses: true,
      metadata: true,
    }
  ],
});