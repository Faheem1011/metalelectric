import fs from 'fs';
import path from 'path';
import pkg from 'pg';
import { fileURLToPath } from 'url';

const { Client } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const connectionString = "postgresql://neondb_owner:npg_CBx3Svwj9fzk@ep-sweet-mud-aw544ynr-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require";

async function runMigration() {
  console.log('Connecting to Neon PostgreSQL...');
  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log('Connected successfully!');

    // 1. Run neon-schema.sql
    const schemaPath = path.join(rootDir, 'database', 'neon-schema.sql');
    if (fs.existsSync(schemaPath)) {
      console.log('Running neon-schema.sql...');
      const schemaSql = fs.readFileSync(schemaPath, 'utf8');
      await client.query(schemaSql);
      console.log('Neon schema created successfully!');
    }

    // 2. Run legacy-catalog-seed.sql
    const seedPath = path.join(rootDir, 'new data', 'legacy-catalog-seed.sql');
    if (fs.existsSync(seedPath)) {
      console.log('Running legacy-catalog-seed.sql...');
      const seedSql = fs.readFileSync(seedPath, 'utf8');
      await client.query(seedSql);
      console.log('Catalog seed data inserted successfully!');
    }

    // 3. Verify products count
    const res = await client.query('SELECT count(*) FROM public.products;');
    console.log(`✅ Success! Total products in Neon database: ${res.rows[0].count}`);

  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await client.end();
  }
}

runMigration();
