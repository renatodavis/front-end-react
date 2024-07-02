import { DocumentTextIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { BuildingIcon, PackagePlusIcon, SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TitleSeparator from '../components/TitleSeparator';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const SearchPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <TitleSeparator />
            <div className="flex items-center space-x-4 mb-12">
                <SearchIcon className="w-9 h-9 text-gray-500" />
                <Input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-[32rem] p-4 text-lg border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex space-x-6">
                <Button onClick={() => handleNavigation('/home')} className="flex items-center space-x-2 px-6 py-3 text-lg">
                    <HomeIcon className="mr-2 h-6 w-6" /> Home
                </Button>
                <Button onClick={() => handleNavigation('/CadastroClientes')} className="flex items-center space-x-2 px-6 py-3 text-lg">
                    <PackagePlusIcon className="mr-2 h-6 w-6" /> Cadastros
                </Button>
                <Button onClick={() => handleNavigation('/vendas')} className="flex items-center space-x-2 px-6 py-3 text-lg">
                    <BuildingIcon className="mr-2 h-6 w-6" /> Vendas
                </Button>
                <Button onClick={() => handleNavigation('/relatorios')} className="flex items-center space-x-2 px-6 py-3 text-lg">
                    <DocumentTextIcon className="mr-2 h-6 w-6" /> Relatórios
                </Button>
                
                
            </div>

                <div className="space-y-1 my-4">
                
                    <p className="text-sm text-muted-foreground">
                        Este projeto é parte de um portfólio pessoal destinado a demonstrar habilidades em desenvolvimento de software 
                        <br/>utilizando tecnologias modernas como React (TypeScript) para o front-end e Java (Spring Boot) para o back-end. 
                        <br/>Sinta-se à vontade para explorar e testar todas as funcionalidades.
                    </p>
                    <Separator className="my-4" />
                </div>
                <br/>
            <Label htmlFor="footer">&copy; 2024 Todos os Direitos Reservados </Label>
            <Label htmlFor="footer" className='my-4'> renatodavis@gmail.com </Label>
        

        </div >




    );
};

export default SearchPage;
