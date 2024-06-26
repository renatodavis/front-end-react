import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
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
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const colunas = [

        { accessorKey: "id", header: "Id" },
        { accessorKey: "nome", header: "Nome" },
        { accessorKey: "cpf", header: "Cpf" }
    ];

    if (loading) {
        return <div className='flex top-0 p-1'>Loading...</div>;
    }

    return (
        <>
            <Label>Consulta de clientes</Label>
            <DataTable data={data} columns={colunas} />
        </>
    );
};

export default Clientes;
