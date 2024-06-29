import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
import MainContent from '../../components/MainContent';
import { Label } from '../../components/ui/label';
import { api } from '../../services/api';

const Clientes: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("http://localhost:8080/api/pessoas");
                setData(response.data);
            } catch (error) {
                console.error("Error ao buscar os dados de clientes", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const colunas = [
        { accessorKey: "id", header: "Id" },
        { accessorKey: "nome", header: "Nome" },
        { accessorKey: "cpf", header: "Cpf" },
        { accessorKey: "ativo", header: "ativo" }
    ];

    if (loading) {
        return <div className='flex top-0 p-1'>Loading...</div>;
    }

    return (
        <>
            <MainContent>
                <Label>Consulta de clientes</Label>
                <DataTable data={data} columns={colunas} />
            </MainContent>
        </>
    );
};

export default Clientes;
