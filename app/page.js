'use client';

import { useState } from 'react';
import { categoriasExemplo, servicosExemplo } from '@/dados/exemplo';
import Filtro from '@/components/Filtro/Filtro';
import ListaServicos from '@/components/ListaServicos/ListaServicos';

export default function HomePage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas');
  const [ordenacao, setOrdenacao] = useState('padrao');

  // 1. Filtra pela categoria escolhida
  const servicosFiltrados =
    categoriaSelecionada === 'todas'
      ? servicosExemplo
      : servicosExemplo.filter(
          (s) => s.categoriaId === Number(categoriaSelecionada)
        );

  // 2. Ordena por preço ou duração (RF09)
  const servicosOrdenados = [...servicosFiltrados].sort((a, b) => {
    if (ordenacao === 'preco-asc') return a.preco - b.preco;
    if (ordenacao === 'preco-desc') return b.preco - a.preco;
    if (ordenacao === 'duracao-asc') return a.duracaoMin - b.duracaoMin;
    if (ordenacao === 'duracao-desc') return b.duracaoMin - a.duracaoMin;
    return 0;
  });

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '0.25rem' }}>
        Nossos Serviços
      </h1>
      <p style={{ color: '#4b5563', marginTop: 0, marginBottom: '1.5rem' }}>
        Escolha uma categoria ou ordene por preço e duração.
      </p>

      <Filtro
        categorias={categoriasExemplo}
        categoriaSelecionada={categoriaSelecionada}
        onSelecionarCategoria={setCategoriaSelecionada}
        ordenacao={ordenacao}
        onMudarOrdenacao={setOrdenacao}
      />

      <ListaServicos servicos={servicosOrdenados} />
    </div>
  );
}