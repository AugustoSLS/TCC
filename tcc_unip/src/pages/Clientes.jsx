import { useState, useEffect } from 'react';
import '../styles/client.css';
import { useNavigate } from 'react-router-dom';



export default function Clients() {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [busca, setBusca] = useState('');
    const [visualizacao, setVisualizacao] = useState('grid'); // 'grid' | 'lista'

    useEffect(() => {
        fetch('http://localhost:3000/api/usuarios')
            .then((res) => res.json())
            .then((data) => {
                setClientes(data);
                setCarregando(false);
            })
            .catch((err) => {
                setErro(err.message);
                setCarregando(false);
            });
    }, []);

    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p>Erro ao carregar clientes: {erro}</p>;

    // para fazer busca 

    const termo = busca.trim().toLowerCase();
    const clientesFiltrados = clientes.filter((cliente) => {
        const nomeCompleto = `${cliente.nome} ${cliente.sobrenome}`.toLowerCase();
        return (
            nomeCompleto.includes(termo) ||
            cliente.email?.toLowerCase().includes(termo) ||
            String(cliente.id).includes(termo)
        );
    });

    return (
        <section className='cSection'>
            <div className='cToolbar'>
                <div className='cSearchGroup'>
                    <input type="text"className='cSearch'placeholder="Buscar por nome, email ou ID..." value={busca} onChange={(e) => setBusca(e.target.value)}/>
                    <div className='cViewToggle'>
                        <button className={visualizacao === 'grid' ? 'active' : ''} onClick={() => setVisualizacao('grid')} type="button" title="Ver em cards">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                                <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                            </svg>
                        </button>
                        <button className={visualizacao === 'lista' ? 'active' : ''} onClick={() => setVisualizacao('lista')} type="button" title="Ver em lista">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="4" y1="6" x2="20" y2="6"/>
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <line x1="4" y1="18" x2="20" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <span className='cCount'>{clientesFiltrados.length} clientes</span>
            </div>

            <div className={visualizacao === 'grid' ? 'cCards' : 'cList'}>
                {clientesFiltrados.map((cliente) => (
                    <div className={visualizacao === 'grid' ? 'uCard' : 'uRow'} 
                    key={cliente.id}
                    onClick={() => navigate(`/clientes/${cliente.id}`)}
                    style={{cursor: 'pointer'}}
                    >
                        <div className='uAvatar'>
                            <img src="./src/assets/profile.png" alt='photo.user' />
                        </div>

                        {visualizacao === 'grid' ? (
                            <div className='uInfo'>
                                <p className='uId'>#{cliente.id}</p>
                                <div className='unInfo'>
                                    <p>{cliente.nome} {cliente.sobrenome}</p>
                                </div>
                                <p className='uEmail'>{cliente.email}</p>
                            </div>
                        ) : (
                            <>
                                <span className='uId'>#{cliente.id}</span>
                                <span className='uNome'>{cliente.nome} {cliente.sobrenome}</span>
                                <span className='uEmail'>{cliente.email}</span>
                                <span className='uTelefone'>{cliente.ddi} {cliente.telefone}</span>
                            </>
                        )}
                    </div>
                ))}

                {clientesFiltrados.length === 0 && ( <p className='cEmpty'>Nenhum cliente encontrado.</p> )}
            </div>
        </section>
    );
}