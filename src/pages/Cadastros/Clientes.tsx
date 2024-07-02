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

    

    return (
        <>
            <MainContent>
                {loading ? (
                    <div className="flex justify-center items-center h-32">
                        <svg className="animate-spin h-8 w-8 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V2.5M20 12a8 8 0 11-8-8"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <div>
                        <Label>Consulta de clientes</Label>
                        <DataTable data={data} columns={colunas} />
                    </div>
                )}
            </MainContent>
        </>
    );
};

export default Clientes;
