'use client';

import { useState } from 'react';
import { categoriasExemplo } from '@/dados/exemplo';
import Mensagem from '@/components/Mensagem/Mensagem';

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState(categoriasExemplo);
  const [nome, setNome] = useState('');
  const [aviso, setAviso] = useState(null);

  function handleAdicionar(e) {
    e.preventDefault();
    if (!nome.trim()) {
      setAviso({ texto: 'Informe o nome da categoria.', tipo: 'erro' });
      return;
    }

    const nova = { id: Date.now(), nome: nome.trim() };
    setCategorias([...categorias, nova]);
    setNome('');
    setAviso({ texto: 'Categoria adicionada!', tipo: 'sucesso' });
  }

  function handleExcluir(categoria) {
    if (window.confirm(`Deseja excluir a categoria "${categoria.nome}"?`)) {
      setCategorias(categorias.filter((item) => item.id !== categoria.id));
      setAviso({ texto: 'Categoria removida.', tipo: 'sucesso' });
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Categorias de Serviços</h1>

      {aviso && <Mensagem texto={aviso.texto} tipo={aviso.tipo} />}

      <form onSubmit={handleAdicionar} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nova categoria (ex: Hidratação)"
          style={{ flex: 1, padding: '0.6rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
        <button
          type="submit"
          style={{ padding: '0.6rem 1rem', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Adicionar
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {categorias.map((cat) => (
          <li
            key={cat.id}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}
          >
            <span>{cat.nome}</span>
            <button
              type="button"
              onClick={() => handleExcluir(cat)}
              style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}