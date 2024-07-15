import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useUser } from '../../userContext'
import Logo from '../../assets/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    
    const user = useUser(); // Obtém o usuário do contexto

    useEffect(() => {
        if (user) {
            navigate('/Dashboard'); // Redireciona se o usuário já estiver logado
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const userCredential = await signInWithEmailAndPassword(auth, email, senha);
                console.log('Usuário logado:', userCredential.user);
                navigate('/Dashboard');
            } else {
                if (senha !== confirmaSenha) {
                    alert('As senhas não coincidem!');
                    return;
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
                console.log('Usuário registrado:', userCredential.user);
                navigate('/Alunos');
            }
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center custom-bg2 bg-cover bg-zinc-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="h-16 w-auto" />
                </div>
                <h2 className="text-center text-2xl font-bold text-zinc-900">
                    {isLogin ? 'Área do Aluno - Login' : 'Área do Aluno - Registro'}
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-zinc-900">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-zinc-300 rounded" />
                    </div>
                    <div>
                        <label className="block text-zinc-900">Senha:</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required className="w-full px-4 py-2 border border-zinc-300 rounded" />
                    </div>
                    {!isLogin && (
                        <div>
                            <label className="block text-zinc-900">Confirme a Senha:</label>
                            <input type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required className="w-full px-4 py-2 border border-zinc-300 rounded" />
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
