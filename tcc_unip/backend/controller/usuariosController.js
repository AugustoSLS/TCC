import { listarUsuarios, cadastrarUsuario, buscarUsuarioPorId } from '../services/usuariosService.js';

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

export async function getUsuarioPorId(req, res) {
  try {
    const { id } = req.params;
    const usuario = await buscarUsuarioPorId(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
}