// Import the required modules
import { Pool } from 'pg';


describe('Postgres DB Connection', () => {
  it('should establish a successful pg db connection', async () => {
    const pool = new Pool({
        user: '<your_username>',
        host: 'localhost',
        database: 'linktree_app',
        port: 5432,
      })

    const client = await pool.connect();
    expect(client).toBeTruthy();
    client.release();
  });
  
});

