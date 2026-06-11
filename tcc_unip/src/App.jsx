import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clientes'
import Plans from './pages/Planos'


// Components

import Header from './components/header'

function App() {

  return (  
    <BrowserRouter>
      <Header />
      <main>
          <Routes>
            <Route path = "/" element= {<Navigate to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path = "/Clientes" element = {<Clients />} />
            <Route path = "/Planos" element = {<Plans />} />
          </Routes>
        </main>
    </BrowserRouter>
  ) 
}

export default App
