
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CadastroCliente from './pages/Cadastros/Clientes';
import ClientesEdit from './pages/Cadastros/ClientesEdit';
import HomePage from './pages/Home';
import SearchPage from './pages/SearchPage';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/CadastroClientes" element={<CadastroCliente />} />
                <Route path="/Clientes/Novo" element={<ClientesEdit />} />
                <Route path="/CadastroClientes/edit/:id" element={<ClientesEdit />} />
            </Routes>
        </Router>
    );
};

export default App;
