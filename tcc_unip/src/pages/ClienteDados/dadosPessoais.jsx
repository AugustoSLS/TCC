import { useOutletContext } from 'react-router-dom';
import { formatarData } from '../../components/formatData';

export default function DadosPessoais() {
    const { cliente } = useOutletContext();

    return (
        <div className="dField">
            <div className="dItem">
                <p className="dLabel">Email</p>
                <span className="dValue">{cliente.email}</span>
            </div>

            <div className="dItem">
                <p className="dLabel">Telefone</p>
                <span className="dValue">{cliente.ddi} {cliente.telefone}</span>
            </div>

            <div className="dItem">
                <p className="dLabel">CPF</p>
                <span className="dValue">{cliente.cpf}</span>
            </div>

            <div className="dItem">
                <p className="dLabel">Data de Nascimento</p>
                <span className="dValue">{formatarData(cliente.data_nascimento)}</span>
            </div>
        </div>
    );
}