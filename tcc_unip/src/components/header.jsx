import { NavLink, useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { useState, useEffect, useRef } from 'react';

import Theme from '/src/components/theme.jsx';

export default function Header() {
    const { openModal } = useModal();

    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [aberto, setAberto] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/usuarios')
            .then((res) => res.json())
            .then((data) => setClientes(data))
            .catch(() => setClientes([]));
    }, []);

    // fecha se clicar fora
    useEffect(() => {
        function fecharFora(e) {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setAberto(false);
            }
        }
        document.addEventListener('mousedown', fecharFora);
        return () => document.removeEventListener('mousedown', fecharFora);
    }, []);

    const termo = busca.trim().toLowerCase();
    const resultados = termo === '' ? [] : clientes.filter((cliente) => {
        const nomeCompleto = `${cliente.nome} ${cliente.sobrenome}`.toLowerCase();
        return (
            nomeCompleto.includes(termo) ||
            cliente.email?.toLowerCase().includes(termo) ||
            String(cliente.id).includes(termo)
        );
    });

    function irParaCliente(id) {
        navigate(`/clientes/${id}`);
        setBusca('');
        setAberto(false);
    }

    return (
        <header>
            <nav>
                <NavLink to='/dashboard'>Dashboard </NavLink>
                <NavLink to='/clientes'>Clientes </NavLink>
                <NavLink to='/planos'>Planos </NavLink>
            </nav>

            <div className="search-wrap" ref={wrapRef}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="6.5" cy="6.5" r="4.5"/><line x1="10.5" y1="10.5" x2="14" y2="14"/>
                </svg>
                <input
                    type="text"
                    placeholder="Buscar por nome, email ou ID..."
                    value={busca}
                    onChange={(e) => { setBusca(e.target.value); setAberto(true); }}
                    onFocus={() => busca && setAberto(true)}
                />

                {aberto && termo !== '' && (
                    <div className="searchResults">
                        {resultados.length === 0 && (
                            <p className="searchEmpty">Nenhum cliente encontrado.</p>
                        )}
                        {resultados.map((cliente) => (
                            <div
                                key={cliente.id}
                                className="searchCard"
                                onClick={() => irParaCliente(cliente.id)}
                            >
                                <img src="./src/assets/profile.png" alt="photo.user" />
                                <div>
                                    <p className="searchNome">{cliente.nome} {cliente.sobrenome}</p>
                                    <p className="searchEmail">{cliente.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Theme />
            <button className="cta" onClick={() => openModal()}>+ Add</button>
        </header>
    );
}