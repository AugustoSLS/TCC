import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuarios.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(usuariosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});