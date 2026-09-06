import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext';


//Pages
import Dashboard from './pages/dashboard.jsx'
import Clients from './pages/clientes.jsx'
import Plans from './pages/planos.jsx'


import ClienteDetalhe from './pages/ClienteDados/ClienteDetalhe.jsx';
import DadosPessoais from './pages/ClienteDados/dadosPessoais.jsx';
import Contrato from './pages/ClienteDados/Contrato.jsx';

// components
import FormModal from './components/FormModal/FormModal';





// Components

import Header from './components/header'

function App() {

 return (
    <ModalProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Dashboard" /> } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/clientes/:id" element={<ClienteDetalhe />}>
              <Route index element={<DadosPessoais />} />
              <Route path="contrato" element={<Contrato />} />
            </Route>
          </Routes>
        </main>
        <FormModal />
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App
