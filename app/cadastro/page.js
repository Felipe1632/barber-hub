'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mensagem from '@/components/Mensagem/Mensagem';

export default function CadastroPage() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro('Preencha nome, e-mail e senha.');
      return;
    }

    setErro('');
    alert(`Cadastro validado para ${nome} (na Etapa 3 conectará na API)`);
    router.push('/login');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>Criar Conta</h1>
      {erro && <Mensagem texto={erro} tipo="erro" />}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>
        <div>
          <label htmlFor="nome">Nome *</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha *</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', marginTop: '0.25rem' }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: '0.75rem', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Cadastrar
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Já tem uma conta? <Link href="/login">Entrar</Link>
      </p>
    </div>
  );
}