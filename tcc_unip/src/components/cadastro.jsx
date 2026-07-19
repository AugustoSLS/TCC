import { useState } from 'react';
import '../styles/cadastro.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Cadastro() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');


  return (
    <div>
      <button className="cta" onClick={() => setIsOpen(true)}>
        + Add
      </button>

      <div
        className={`drawer-overlay ${isOpen ? 'drawer-overlay--open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`drawer-panel ${isOpen ? 'drawer-panel--open' : ''}`}>
        <div className="drawer-header">
          <h2>Cadastro de Usuário</h2>
        </div>

        <form className='cForm' onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}> 
            <div className='cForm-pinfo'>
              <label>Nome</label>
                <input name = "nome" type="text" placeholder="Nome" required/>
              <label>Sobrenome</label>
                <input name="sobrenome" type="text" placeholder="Sobrenome" required/>
              
              <label>CPF</label>
                <input name="cpf" placeholder="CPF" />
              
              <label>Data de Nascimento</label>
                <input name="data_nascimento" type="date" required/>
            </div>

            <div className='cForm-cinfo'>
              <label>Email</label>
              <input name="email" type="email" placeholder="usuário@email.com" required/>
            
              <label>Telefone para Contato</label>
              <div className='tinfo'>
                <PhoneInput placeholder="Digite seu telefone" value={phone} onChange={setPhone} defaultCountry="BR" international/>
                <input name="telefone" placeholder="Número" required />
              </div>
            </div>
          <button type="submit" className="cta drawer-submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}