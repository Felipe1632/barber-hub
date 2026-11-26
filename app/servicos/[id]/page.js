'use client';

import { servicosExemplo } from '@/dados/exemplo';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Mensagem from '@/components/Mensagem/Mensagem';

function formatarDuracao(minutos) {
  const horas = Math.floor(minutos / 60);
  const mins = minutos % 60;
  if (horas === 0) return `${mins}min`;
  if (mins === 0) return `${horas}h`;
  return `${horas}h${mins < 10 ? '0' : ''}${mins}`;
}

function formatarPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default function DetalheServicoPage() {
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

  function handleExcluir() {
    if (window.confirm(`Deseja excluir "${servico.nome}"?`)) {
      alert('Excluído');
      router.push('/');
    }
  }

  return (
    <article>
  {servico.imagemUrl && (
  <img
    src={servico.imagemUrl}
    alt={servico.nome}
    style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
  />
)}

      <p>{servico.categoria?.nome}</p>
      <h1>{servico.nome}</h1>
      <p>{servico.descricao}</p>

      <p>
        <strong>Duração:</strong> {formatarDuracao(servico.duracaoMin)} |{' '}
        <strong>Preço:</strong> {formatarPreco(servico.preco)}
      </p>

      <div>
        <Link href="/">← Voltar</Link>{' '}
        <Link href={`/servicos/${servico.id}/editar`}>Editar</Link>{' '}
        <button type="button" onClick={handleExcluir}>
          Excluir
        </button>
      </div>
    </article>
  );
}