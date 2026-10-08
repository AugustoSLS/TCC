import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { formatarData } from '../../components/formatData';

export default function Contrato() {
    const { cliente } = useOutletContext();

    const [contrato, setContrato] = useState(null);
    const [planos, setPlanos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [mostrarPdf, setMostrarPdf] = useState(false);

    const [planoId, setPlanoId] = useState('');
    const [dataInicio, setDataInicio] = useState(() => new Date().toISOString().slice(0, 10));
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {
        carregarContrato();
        fetch('http://localhost:3000/api/planos')
            .then((res) => res.json())
            .then(setPlanos);
    }, [cliente.id]);

    function carregarContrato() {
        setCarregando(true);
        fetch(`http://localhost:3000/api/usuarios/${cliente.id}/contrato`)
            .then((res) => (res.status === 404 ? null : res.json()))
            .then((data) => {
                setContrato(data);
                setCarregando(false);
            });
    }

    function atribuirPlano(e) {
        e.preventDefault();
        setSalvando(true);
        fetch(`http://localhost:3000/api/usuarios/${cliente.id}/contrato`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plano_id: planoId, data_inicio: dataInicio }),
        })
            .then((res) => res.json())
            .then(() => {
                setSalvando(false);
                setMostrarForm(false);
                carregarContrato();
            });
    }

    if (carregando) return <p>Carregando...</p>;

    return (
        <div className='dField'>
            {!contrato ? (
                <div className="contratoVazio">
                    <p className="dLabel">Nenhum plano atribuído a este cliente.</p>
                    <button className="cta" onClick={() => setMostrarForm(true)}>
                        + Atribuir plano
                    </button>
                </div>
            ) : (
                <>
                    <p className="dLabel">Plano</p>
                        <span className="dValue">{contrato.plano_nome}</span>
                    <p className="dLabel">Status</p>
                        <span className="dValue">{contrato.status}</span>
                    <p className="dLabel">Vencimento</p>
                        <span className="dValue">{formatarData(contrato.data_fim)}</span>

                    <button className="cta" onClick={() => setMostrarPdf(true)}>
                        Ver contrato
                    </button>
                </>
            )}

            {mostrarForm && (
                <div className="modalOverlay" onClick={() => setMostrarForm(false)}>
                    <form className="modalBox" onClick={(e) => e.stopPropagation()} onSubmit={atribuirPlano}>
                        <h2>Atribuir plano</h2>

                        <label className="dLabel">Plano</label>
                        <select value={planoId} onChange={(e) => setPlanoId(e.target.value)} required>
                            <option value="" disabled>Selecione um plano</option>
                            {planos.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.nome} — R$ {Number(p.preco).toFixed(2)}
                                </option>
                            ))}
                        </select>

                        <label className="dLabel">Data de início</label>
                        <input
                            type="date"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            required
                        />

                        <div className="modalActions">
                            <button type="button" onClick={() => setMostrarForm(false)}>Cancelar</button>
                            <button type="submit" className="cta" disabled={salvando}>
                                {salvando ? 'Salvando...' : 'Confirmar'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {mostrarPdf && (
                <div className="modalOverlay" onClick={() => setMostrarPdf(false)}>
                    <div className="modalBox modalBoxPdf" onClick={(e) => e.stopPropagation()}>
                        <div className="modalPdfHeader">
                            <h2>Contrato — {cliente.nome} {cliente.sobrenome}</h2>
                            <button onClick={() => setMostrarPdf(false)}>×</button>
                        </div>
                        <iframe src="/exemplo.pdf" title="Contrato" className="pdfFrame" />
                    </div>
                </div>
            )}
        </div>
    );
}