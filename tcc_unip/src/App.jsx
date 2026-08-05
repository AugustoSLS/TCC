import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext';


//Pages
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clientes'
import Plans from './pages/Planos'
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
            <Route path="/" element={<Navigate to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Clientes" element={<Clients />} />
            <Route path="/Planos" element={<Plans />} />
          </Routes>
        </main>
        <FormModal />
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App
