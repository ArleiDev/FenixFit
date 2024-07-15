import React from 'react'
import Logo from '../../assets/logo.png'
import Banner from '../Banner/Banner'
import Planos from '../Planos/Planos'
import Feedback from '../Feedback/Feedback'
import Contato from '../Contato/Contato'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='p-5 flex justify-around shadow-md bg-white items-center mb-30 fixed w-screen'>
                <div id='Logo'>
                    <img className='h-10 rounded transition duration-500 hover:scale-125' src={Logo} alt="" srcset="" />
                </div>
                <div id="menu" className='flex gap-14 no-underline font-bold text-gray-950 items-center'>
                        <a className= ' hover:text-violet-900 hover:scale-125 rounded transition duration-500 ' href="#Home">Home</a>
                        <a className='hover:text-violet-900 hover:scale-125 rounded transition duration-500'href="#Planos">Planos</a>
                        <a className='hover:text-violet-900 hover:scale-125 rounded transition duration-500'href="#Feedback">Feedbacks</a>
                        <a className='hover:text-violet-900 hover:scale-125 rounded transition duration-500'href="#Contato">Contato</a>
                        <Link  to="/Alunos"><span className='border border-solid p-2 rounded-md bg-zinc-950 text-white border-gray-500'>Area do Aluno</span></Link>

    
                </div>
            </nav>
        </div>
    )
}

export default Navbar