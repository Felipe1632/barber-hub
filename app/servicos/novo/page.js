'use client';

import {useRouter} from 'next/navigation';
import {categoriasExemplo} from '@/dados/exemplo';
import FormServico from '@/components/FormServico/FormServico';

export default function NovoServicoPage() {
  const router = useRouter();

  function handleCriar(dados) {
    alert(`Serviço "${dados.nome}" validado com sucesso!`);
    router.push('/');
  }

  return (
    <div>
      <h1>Cadastrar Novo Serviço</h1>
      <FormServico categorias={categoriasExemplo} onSalvar={handleCriar} />
    </div>
  );
}