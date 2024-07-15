import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center custom-bg2 bg-cover bg-zinc-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="h-16 w-auto" />
                </div>
                <h2 className="text-center text-2xl font-bold text-zinc-900">
                    {isLogin ? 'Área do Aluno - Login' : 'Área do Aluno - Registro'}
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-zinc-900">Email:</label>
                        <input type="email" required className="w-full px-4 py-2 border border-zinc-300 rounded" />
                    </div>
                    <div>
                        <label className="block text-zinc-900">Senha:</label>
                        <input type="password" required className="w-full px-4 py-2 border border-zinc-300 rounded" />
                    </div>
                    {!isLogin && (
                        <div>
                            <label className="block text-zinc-900">Confirme a Senha:</label>
                            <input type="password" required className="w-full px-4 py-2 border border-zinc-300 rounded" />
                        </div>
                    )}
                    <button type="submit" className="w-full py-2 bg-violet-900 text-white rounded hover:bg-violet-800">
                        {isLogin ? 'Entrar' : 'Registrar'}
                    </button>
                </form>
                <div className="text-center">
                    <button
                        className="text-violet-900 underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Criar uma conta' : 'Já tem uma conta? Entre aqui'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
