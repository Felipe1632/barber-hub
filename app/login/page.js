'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mensagem from '@/components/Mensagem/Mensagem';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !senha.trim()) {
      setErro('Preencha e-mail e senha.');
      return;
    }

    setErro('');
    alert(`Login validado para ${email} (na Etapa 3 conectará na API)`);
    router.push('/');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>Entrar</h1>
      {erro && <Mensagem texto={erro} tipo="erro" />}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>
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
          Entrar
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Ainda não tem conta? <Link href="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}