import { listarUsuarios, cadastrarUsuario, buscarUsuarioPorId, listarPlanos, buscarContratoPorUsuario, criarContrato, buscarEstatisticas, atualizarUsuario, excluirUsuario } from '../services/usuariosService.js';

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

export async function putUsuario(req, res) {
  try {
    const usuario = await atualizarUsuario(req.params.id, req.body);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.json(usuario);
  } catch (err) {
    console.error(err);
    if (err.code === '23505') {
      return res.status(409).json({ error: 'CPF ou email já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
}

export async function deleteUsuario(req, res) {
  try {
    const ok = await excluirUsuario(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
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


export async function getPlanos(req, res) {
    try {
        const planos = await listarPlanos();
        res.json(planos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar planos' });
    }
}

export async function getContrato(req, res) {
    try {
        const contrato = await buscarContratoPorUsuario(req.params.id);
        if (!contrato) return res.status(404).json({ erro: 'Sem contrato' });
        res.json(contrato);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar contrato' });
    }
}

export async function postContrato(req, res) {
    try {
        const { plano_id, data_inicio } = req.body;
        const contrato = await criarContrato(req.params.id, plano_id, data_inicio);
        if (!contrato) return res.status(404).json({ erro: 'Plano não encontrado' });
        res.status(201).json(contrato);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao atribuir contrato' });
    }
}

export async function getEstatisticas(req, res) {
    try {
        const stats = await buscarEstatisticas();
        res.json(stats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar estatísticas' });
    }
}

