import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className='p-5 flex justify-between shadow-md bg-white items-center fixed w-full z-10'>
                <div id='Logo'>
                    <img className='h-10 rounded transition duration-500 hover:scale-125' src={Logo} alt="Logo" />
                </div>
               
                <div className={`lg:flex lg:items-center lg:gap-14 no-underline font-bold text-gray-950 items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <a className='block mt-4 lg:inline-block lg:mt-0 hover:text-violet-900 hover:scale-125 rounded transition duration-500' href="#Home">Home</a>
                    <a className='block mt-4 lg:inline-block lg:mt-0 hover:text-violet-900 hover:scale-125 rounded transition duration-500' href="#Planos">Planos</a>
                    <a className='block mt-4 lg:inline-block lg:mt-0 hover:text-violet-900 hover:scale-125 rounded transition duration-500' href="#Feedback">Feedbacks</a>
                    <a className='block mt-4 lg:inline-block lg:mt-0 hover:text-violet-900 hover:scale-125 rounded transition duration-500' href="#Contato">Contato</a>
                    <Link to="/Alunos" className='block mt-4 lg:inline-block lg:mt-0'>
                        <button className='border border-solid p-2 rounded-md bg-zinc-950 text-white border-gray-500 hover:bg-violet-800'>
                            Área do Aluno
                        </button>
                    </Link>
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-gray-800 hover:text-violet-900 focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            {isOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
