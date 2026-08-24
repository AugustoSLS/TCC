import express from 'express';
import { listarUsuarios } from '../services/usuariosService.js';
import { getUsuarios, postUsuario } from '../controller/usuariosController.js';

const router = express.Router();

router.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

router.post('/api/usuarios', postUsuario);

export default router;