import { BeakerIcon } from "@heroicons/react/24/solid";

const TitleSeparator: React.FC = () => {
    return (
        <div>
            <div className="space-y-1">
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 m-4'>
                    <BeakerIcon className='w-7 h-7'></BeakerIcon>
                    <span >Sistema ERP</span>
                </div>
            </div>                        
        </div>
    )
};

export default TitleSeparator;