'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { categoriasExemplo, servicosExemplo } from '@/dados/exemplo';
import FormServico from '@/components/FormServico/FormServico';
import Mensagem from '@/components/Mensagem/Mensagem';

export default function EditarServicoPage() {
  const { id } = useParams();
  const router = useRouter();

  const servico = servicosExemplo.find((item) => item.id === Number(id));

  if (!servico) {
    return (
      <div>
        <Mensagem texto="Serviço não encontrado." tipo="erro" />
        <Link href="/">← Voltar para a lista</Link>
      </div>
    );
  }

  function handleEditar(dados) {
    alert(`Serviço "${dados.nome}" atualizado com sucesso!`);
    router.push(`/servicos/${servico.id}`);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Editar Serviço
      </h1>
      <FormServico
        categorias={categoriasExemplo}
        valoresIniciais={servico}
        onSalvar={handleEditar}
      />
    </div>
  );
}