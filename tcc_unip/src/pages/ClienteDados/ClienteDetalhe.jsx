import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { formatarCadastro } from '../../components/formatData';
import '../../styles/clientedetalhe.css';


export default function ClienteDetalhe() {
    const { id } = useParams();

    const [cliente, setCliente] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setCarregando(true);
        fetch(`http://localhost:3000/api/usuarios/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCliente(data);
                setCarregando(false);
            })
            .catch((err) => {
                setErro(err.message);
                setCarregando(false);
            });
    }, [id]);

    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p>Erro ao carregar cliente: {erro}</p>;
    if (!cliente) return <p>Cliente não encontrado.</p>;

    return (
        <section className='dSection'>
            <div className='dInfos'>
                <div className="dHeader">
                    <img className="dAvatar" src="../src/assets/profile.png" alt="Foto do cliente" />
                    <div className="dAvatarWrap">
                        <span className="dNome">{cliente.nome} {cliente.sobrenome}</span>
                        <span className="dId">#{cliente.id} - desde {formatarCadastro(cliente.data_cadastro)}</span>
                    </div>
                </div>
            <div className="dBrowser">
                <nav className="dTabs">
                    <NavLink to="" end>
                        Dados pessoais
                    </NavLink>
                    <NavLink to="contrato">
                        Contrato
                    </NavLink>
                </nav>
                    <Outlet context={{ cliente }} />
                </div>
            </div>
        </section>
    );
}