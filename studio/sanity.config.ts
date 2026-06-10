import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Fill these after creating the project (sanity.io → create project, or `npx sanity init`).
// projectId is NOT secret — it can live in code. The write TOKEN is secret and lives
// only in the website's deploy env (Vercel) / CRHQ credentials vault.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'REPLACE_WITH_PROJECT_ID';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'big-red-oak',
  title: 'Big Red Oak',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
