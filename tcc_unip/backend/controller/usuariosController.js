import { listarUsuarios, cadastrarUsuario } from '../services/usuariosService.js';

export async function getUsuarios(req, res) {
  const usuarios = await listarUsuarios();
  res.json(usuarios);
}

export async function postUsuario(req, res) {
  try {
    const novoUsuario = await cadastrarUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    console.error(err);
    if (err.code === '23505') { // violação de unique (CPF/email duplicado)
      return res.status(409).json({ error: 'CPF ou email já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
}