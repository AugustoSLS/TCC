import { useState, useEffect } from 'react';
import '../styles/client.css';

export default function Clients() {
    const [clientes, setClientes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

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

    return (
        <section className=''>
            <div>
                {/* search bar*/}
                {/* filter buttons*/}
                {/* content show button*/}
            </div>

            <div className='cCards'>
                {clientes.map((cliente) => (
                    <div className='uCard' key={cliente.id}>
                        <div className='uAvatar'>
                            <img
                                src="./src/assets/profile.jpg"
                                alt='photo.user'
                            />
                        </div>
                        <div className='uInfo'>
                            <p>{cliente.id}</p>
                            <div className='unInfo'>
                                <p>{cliente.nome}</p>
                                <p>{cliente.sobrenome}</p>
                            </div>
                            <p>{cliente.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}