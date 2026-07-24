import pkg from 'pg';
const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || "postgresql://neondb_owner:npg_CBx3Svwj9fzk@ep-sweet-mud-aw544ynr-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require";

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
