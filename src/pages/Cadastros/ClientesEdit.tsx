
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import MainContent from '../../components/MainContent';
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
    ativo: boolean;
    limiteCredito: number;
}

const ClientesEdit: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState<Cliente>({ id: 0, nome: '', cpf: '', ativo: false, limiteCredito: 0 } || null);
    const [loading, setLoading] = useState(!!id);

    const [error, setError] = useState<string | null>(null);
    const form = useForm();

    useEffect(() => {
        if (id) {
            const fetchCliente = async () => {
                try {
                    setLoading(true);
                    const response = await api.get(`/api/pessoas/${id}`);
                    setCliente(response.data);
                    setLoading(false);
                } catch (error) {
                    setError('Erro ao carregar dados do cliente.');
                } finally {
                    setLoading(false);
                }
            };
            fetchCliente();
        }
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
            setLoading(true);
            if (id) {
                await api.put('/api/pessoas/alterar', cliente);
            } else {
                await api.post('/api/pessoas', cliente);
            }
            setLoading(false);
            navigate('/CadastroClientes');
        } catch (error) {
            setError('Erro ao atualizar cliente.');
        }
    };



    if (error) return <p>{error}</p>;

    return (
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
                <div className='m-1' >
                    <h1 className="text-2xl font-bold py-7">{id ? 'Editar Cliente' : 'Cadastrar Cliente'} </h1>
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
                </div>)}
        </MainContent>
    );
};

export default ClientesEdit;
