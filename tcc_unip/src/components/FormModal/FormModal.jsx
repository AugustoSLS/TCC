import { useState } from 'react';
import { useModal } from '../../context/ModalContext';

import DdiSelect from '../DDI/ddiSelect';
import { API_URL } from '../../config';

import './FormModal.css';

export default function FormModal() {
  const { showModal, modalData, closeModal } = useModal();

  const [ddi, setDdi] = useState('+55');

  const [telefone, setTelefone] = useState('');
  const handleTelefoneChange = (e) => {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 11); // só números, máx 9
  setTelefone(digits);
};  

  const [cpf, setCpf] = useState('');
  const handleCpfChange = (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  setCpf(v);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = {
    nome: form.nome.value,
    sobrenome: form.sobrenome.value,
    cpf: cpf,
    data_nascimento: form.data_nascimento.value,
    email: form.email.value,
    ddi: ddi,
    telefone: telefone, 
  };

  try {
    const res = await fetch(`${API_URL}/api/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
    if (!res.ok) throw new Error('Falha ao cadastrar');
    closeModal();
  } catch (err) {
    console.error(err);
    alert('Erro ao salvar. Tente novamente.');
  }
};

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <form className='cForm' onSubmit={handleSubmit}>
          <div className='cForm-pinfo'>
            <label>Nome</label>
              <input name="nome" type="text" placeholder="Nome" required/>
            <label>Sobrenome</label>
              <input name="sobrenome" type="text" placeholder="Sobrenome" required/>           
          </div>
          <div className='cForm-doc'>
            <label>CPF</label>
              <input name="cpf" placeholder="000.000.000-00" value={cpf} onChange={handleCpfChange} required/>
            <label>Data de Nascimento</label>
              <input name="data_nascimento" type="date" required/>
          </div>

          <div className='cForm-cinfo'>
            <label>Email</label>
              <input name="email" type="email" placeholder="usuário@email.com" required/>
            <label>Telefone para Contato</label>
            <div className='tinfo'>
              <DdiSelect value={ddi} onChange={setDdi} />
              <input name="telefone" placeholder="(11) 99999-9999" value={telefone} onChange={handleTelefoneChange} required/>
            </div>
          </div>
          <button type="submit" className="drawer-submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}