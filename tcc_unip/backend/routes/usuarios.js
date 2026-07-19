import express from 'express';
import { listarUsuarios } from '../services/usuariosService.js';

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

export default router;