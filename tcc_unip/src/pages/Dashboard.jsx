import { useState, useEffect } from 'react';
import '../styles/dashboard.css';

export default function Dashboard() {
    const [stats, setStats] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard')
            .then((res) => res.json())
            .then((data) => {
                setStats(data);
                setCarregando(false);
            })
            .catch((err) => {
                setErro(err.message);
                setCarregando(false);
            });
    }, []);

    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p>Erro ao carregar dashboard: {erro}</p>;

    return (
        <section className="dashSection">
            <div className="dashGrid">
                <div className="dashCard">
                    <p className="dashLabel">Usuários total</p>
                    <p className="dashValue">{stats.totalUsuarios}</p>
                </div>
                <div className="dashCard">
                    <p className="dashLabel">Planos ativos</p>
                    <p className="dashValue">{stats.planosAtivos}</p>
                </div>
                <div className="dashCard">
                    <p className="dashLabel">Usuários sem plano</p>
                    <p className="dashValue">{stats.usuariosSemPlano}</p>
                </div>
            </div>
        </section>
    );
}