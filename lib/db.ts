import pkg from 'pg';
const { Pool } = pkg;

if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
  throw new Error('DATABASE_URL environment variable is not set. Add it to .env.local');
}

const connectionString = (process.env.DATABASE_URL || process.env.POSTGRES_URL) as string;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
