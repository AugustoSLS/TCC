import pool from '../db.js';

export async function cadastrarUsuario({ nome, sobrenome, cpf, data_nascimento, email, ddi, telefone }) {
  const result = await pool.query(
    `INSERT INTO usuarios (nome, sobrenome, cpf, data_nascimento, email, ddi, telefone)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, nome, sobrenome, email`,
    [nome, sobrenome, cpf, data_nascimento, email, ddi, telefone]
  );
  return result.rows[0];
}

// Listagem e Busca de usuários

export async function listarUsuarios() {
  const result = await pool.query(
    'SELECT id, nome, sobrenome, email, ddi, telefone FROM usuarios ORDER BY id'
  );
  return result.rows;
}

export async function buscarUsuarioPorId(id) {
  const result = await pool.query(
    'SELECT id, nome, sobrenome, email, ddi, telefone, cpf, data_nascimento, data_cadastro FROM usuarios WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

export async function listarPlanos() {
    const { rows } = await pool.query('SELECT * FROM planos ORDER BY preco');
    return rows;
}

export async function buscarContratoPorUsuario(usuarioId) {
    const { rows } = await pool.query(
        `SELECT up.id, up.data_inicio, up.data_fim, up.status,
                p.id AS plano_id, p.nome AS plano_nome, p.preco
         FROM usuarios_planos up
         JOIN planos p ON p.id = up.plano_id
         WHERE up.usuario_id = $1
         ORDER BY up.data_inicio DESC
         LIMIT 1`,
        [usuarioId]
    );
    return rows[0] || null;
}

export async function criarContrato(usuarioId, planoId, dataInicio) {
    const plano = await pool.query('SELECT duracao_dias FROM planos WHERE id = $1', [planoId]);
    if (plano.rows.length === 0) return null;

    const { rows } = await pool.query(
        `INSERT INTO usuarios_planos (usuario_id, plano_id, data_inicio, data_fim, status)
         VALUES ($1, $2, $3, $3::date + ($4 || ' days')::interval, 'ativo')
         RETURNING *`,
        [usuarioId, planoId, dataInicio, plano.rows[0].duracao_dias]
    );
    return rows[0];
}

export async function buscarEstatisticas() {
    const { rows: [totalUsuarios] } = await pool.query(
        `SELECT COUNT(*)::int AS total FROM usuarios`
    );

    const { rows: [planosAtivos] } = await pool.query(
        `SELECT COUNT(*)::int AS total
         FROM usuarios_planos
         WHERE status = 'ativo' AND data_fim >= CURRENT_DATE`
    );

    const { rows: [usuariosSemPlano] } = await pool.query(
        `SELECT COUNT(*)::int AS total
         FROM usuarios u
         WHERE NOT EXISTS (
             SELECT 1 FROM usuarios_planos up
             WHERE up.usuario_id = u.id
               AND up.status = 'ativo'
               AND up.data_fim >= CURRENT_DATE
         )`
    );

    return {
        totalUsuarios: totalUsuarios.total,
        planosAtivos: planosAtivos.total,
        usuariosSemPlano: usuariosSemPlano.total,
    };
}


export async function atualizarUsuario(id, { nome, sobrenome, cpf, data_nascimento, email, ddi, telefone }) {
  const result = await pool.query(
    `UPDATE usuarios
        SET nome = $1, sobrenome = $2, cpf = $3, data_nascimento = $4,
            email = $5, ddi = $6, telefone = $7
      WHERE id = $8
      RETURNING id, nome, sobrenome, email, ddi, telefone, cpf, data_nascimento, data_cadastro`,
    [nome, sobrenome, cpf, data_nascimento, email, ddi, telefone, id]
  );
  return result.rows[0] || null;
}

export async function excluirUsuario(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('DELETE FROM usuarios_planos WHERE usuario_id = $1', [id]);
    const result = await client.query('DELETE FROM usuarios WHERE id = $1', [id]);
    await client.query('COMMIT');
    return result.rowCount > 0;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}