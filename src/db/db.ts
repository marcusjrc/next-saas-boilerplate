import { Pool } from 'pg';

export const pool = new Pool({
    host: 'localhost',
    user: 'pguser',
    password: 'password',
    database: 'saasapp',
});