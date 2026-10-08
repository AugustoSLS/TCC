import express from 'express';
import { listarUsuarios } from '../services/usuariosService.js';
import { postUsuario, getUsuarioPorId, getPlanos, getContrato, postContrato, getEstatisticas, putUsuario, deleteUsuario } from '../controller/usuariosController.js';

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

router.get('/api/usuarios/:id', getUsuarioPorId);
router.get('/api/planos', getPlanos);
router.get('/api/usuarios/:id/contrato', getContrato);
router.get('/api/dashboard', getEstatisticas);

router.post('/api/usuarios', postUsuario);
router.post('/api/usuarios/:id/contrato', postContrato);

router.put('/api/usuarios/:id', putUsuario);
router.delete('/api/usuarios/:id', deleteUsuario);

export default router;