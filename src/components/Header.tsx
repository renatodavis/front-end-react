import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const links = [
    { name: 'Cadastros', link: 'CadastroClientes' },
    { name: 'Suprimentos', link: '/Suprimentos' },
    { name: 'Vendas', link: '/' },
    { name: 'Finanças', link: '/' },
    { name: 'Serviços', link: '/' },
    { name: 'Contabilidade', link: '/' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <BeakerIcon className='w-7 h-7'></BeakerIcon>
          <a href='/' className='font-bold'>Sistema ERP</a>
        </div>

        <div onClick={() => setOpen(!open)} className='absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        <header>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-white' : 'top-[-490px]'}`}>
            {
              links.map((link) => (
                <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                  <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                </li>
              ))
            }
            
          </ul>
        </header>
      </div>
    </div>

  );
};

export default Header;
