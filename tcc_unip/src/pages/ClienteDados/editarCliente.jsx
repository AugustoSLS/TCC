import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { atualizarCliente, excluirCliente } from '../../services/clientService';

export default function EditarCliente() {
    const { cliente, setCliente } = useOutletContext();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: cliente.nome ?? '',
        sobrenome: cliente.sobrenome ?? '',
        email: cliente.email ?? '',
        ddi: cliente.ddi ?? '',
        telefone: cliente.telefone ?? '',
        cpf: cliente.cpf ?? '',
        data_nascimento: cliente.data_nascimento?.slice(0, 10) ?? '',
    });
    const [salvando, setSalvando] = useState(false);
    const [mostrarExcluir, setMostrarExcluir] = useState(false);
    const [msg, setMsg] = useState('');

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSalvar(e) {
        e.preventDefault();
        try {
            setSalvando(true);
            setMsg('');
            const atualizado = await atualizarCliente(cliente.id, form);
            setCliente(atualizado);
            setMsg('Dados atualizados com sucesso.');
        } catch (err) {
            setMsg(`Erro ao salvar: ${err.message}`);
        } finally {
            setSalvando(false);
        }
    }

    async function handleExcluir() {
        try {
            await excluirCliente(cliente.id);
            navigate('/clientes'); // ajuste para a rota da sua listagem
        } catch (err) {
            setMostrarExcluir(false);
            setMsg(`Erro ao excluir: ${err.message}`);
        }
    }

    return (
        <>
            <form className="dField" onSubmit={handleSalvar}>
                <div className="dItem">
                    <label className="dLabel">Nome</label>
                    <input name="nome" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">Sobrenome</label>
                    <input name="sobrenome" value={form.sobrenome} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">CPF</label>
                    <input name="cpf" value={form.cpf} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">DDI</label>
                    <input name="ddi" value={form.ddi} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">Telefone</label>
                    <input name="telefone" value={form.telefone} onChange={handleChange} required />
                </div>
                <div className="dItem">
                    <label className="dLabel">Data de Nascimento</label>
                    <input type="date" name="data_nascimento" value={form.data_nascimento} onChange={handleChange} required />
                </div>

                <div className="dFormActions">
                    <button type="submit" className="cta" disabled={salvando}>
                        {salvando ? 'Salvando...' : 'Salvar alterações'}
                    </button>
                    <button type="button" className="ctaDanger" onClick={() => setMostrarExcluir(true)}>
                        Excluir cliente
                    </button>
                    {msg && <span className="dMsg">{msg}</span>}
                </div>
            </form>

            {mostrarExcluir && (
                <div className="modalOverlay" onClick={() => setMostrarExcluir(false)}>
                    <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                        <h2>Excluir cliente</h2>
                        <p>
                            Tem certeza que deseja excluir <strong>{cliente.nome} {cliente.sobrenome}</strong>?
                            Essa ação não pode ser desfeita.
                        </p>
                        <div className="modalActions">
                            <button type="button" onClick={() => setMostrarExcluir(false)}>Cancelar</button>
                            <button type="button" className="ctaDanger" onClick={handleExcluir}>Excluir</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}