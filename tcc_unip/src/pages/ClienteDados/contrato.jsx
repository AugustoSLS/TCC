import { useOutletContext } from 'react-router-dom';
import { formatarData } from '../../components/formatData';

export default function Contrato() {
    const { cliente } = useOutletContext();

    return (
        <div className='dField'>
            <p className="dLabel">Plano</p>
                <span className="dValue">{cliente.plano}</span>
            <p className="dLabel">Status</p>
                <span className="dValue">{cliente.status}</span>
            <p className="dLabel">Vencimento</p>
                <span className="dValue">{formatarData(cliente.vencimento)}</span>
        </div>
    );
}