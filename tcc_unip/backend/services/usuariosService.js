import pool from '../db.js';

export async function listarUsuarios() {
  const result = await pool.query(
    'SELECT id, nome, sobrenome, email, ddi, telefone FROM usuarios ORDER BY id'
  );
  return result.rows;
}

export async function cadastrarUsuario({ nome, sobrenome, cpf, data_nascimento, email, ddi, telefone }) {
  const result = await pool.query(
    `INSERT INTO usuarios (nome, sobrenome, cpf, data_nascimento, email, ddi, telefone)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, nome, sobrenome, email`,
    [nome, sobrenome, cpf, data_nascimento, email, ddi, telefone]
  );
  return result.rows[0];
}