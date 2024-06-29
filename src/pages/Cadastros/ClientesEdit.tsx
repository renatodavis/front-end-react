import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { api } from '../../services/api';

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    ativo: string;
    limiteCredito: number;
}

const ClientesEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const form = useForm();

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await api.get(`/api/pessoas/${id}`);
                setCliente(response.data);
            } catch (error) {
                setError('Erro ao carregar dados do cliente.');
            } finally {
                setLoading(false);
            }
        };

        fetchCliente();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setCliente((prevCliente) => prevCliente ? {
            ...prevCliente,
            [name]: type === 'checkbox' ? checked : value,
        } : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log(cliente);
            await api.put(`/api/pessoas/alterar`, cliente);
            navigate('/CadastroClientes');
        } catch (error) {
            setError('Erro ao atualizar cliente.');
        }
    };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Cliente</h1>
            <Form {...form}>
                <form onSubmit={handleSubmit}>
                    <FormItem>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <FormControl>
                            <Input
                                id="nome"
                                name="nome"
                                type="text"
                                value={cliente?.nome || ''}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormDescription>Digite o nome completo do cliente</FormDescription>
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <FormControl>
                            <Input
                                id="cpf"
                                name="cpf"
                                type="text"
                                value={cliente?.cpf || ''}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormDescription>Digite o CPF do cliente</FormDescription>
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor="limiteCredito">Limite de Crédito</FormLabel>
                        <FormControl>
                            <Input
                                id="limiteCredito"
                                name="limiteCredito"
                                type="number"
                                value={cliente?.limiteCredito || 0}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormDescription>Digite o limite de crédito do cliente</FormDescription>
                    </FormItem>
                    <FormField
                        control={form.control}
                        name="ativo"
                        render={({ field }) => (
                            <FormItem className="flex items-center">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={(value) => field.onChange(value)}
                                    />
                                </FormControl>
                                <FormLabel htmlFor="ativo" className="ml-2">Ativo</FormLabel>
                            </FormItem>
                        )}
                    />
                    <div className="flex space-x-2 mt-4">
                        <Button type="submit">Salvar</Button>
                        <Button type="button" variant="outline" onClick={() => navigate('/CadastroClientes')}>Cancelar</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ClientesEdit;
