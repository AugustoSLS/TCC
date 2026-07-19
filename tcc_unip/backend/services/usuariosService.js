import pool from '../db.js';

export async function listarUsuarios() {
  const result = await pool.query(
    'SELECT id, nome, sobrenome, email FROM usuarios ORDER BY id'
  );
  return result.rows;
}