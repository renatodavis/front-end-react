import { DocumentTextIcon, HomeIcon } from '@heroicons/react/24/solid';
import { BuildingIcon, PackagePlusIcon, SearchCodeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TitleSeparator from '../components/TitleSeparator';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const SearchPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <TitleSeparator />
            <div className="flex items-center space-x-4 mb-12">
                <SearchCodeIcon className="w-10 h-10 text-gray-500" />
                <Input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-[32rem] p-4 text-lg border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex space-x-8">
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
        </div>
    );
};

export default SearchPage;
