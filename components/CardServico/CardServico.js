import Link from 'next/link';
import styles from './CardServico.module.css';

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

export default function CardServico({ servico }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagemWrapper}>
        {servico.imagemUrl ? (
          <img
            src={servico.imagemUrl}
            alt={servico.nome}
            className={styles.imagem}
          />
        ) : (
          <span className={styles.semImagem}>Sem imagem</span>
        )}
      </div>

      <div className={styles.conteudo}>
        <div className={styles.topo}>
          <span className={styles.categoria}>
            {servico.categoria?.nome || 'Geral'}
          </span>
        </div>

        <h3 className={styles.titulo}>{servico.nome}</h3>

        <div className={styles.info}>
          <span className={styles.duracao}>
            ⏱ {formatarDuracao(servico.duracaoMin)}
          </span>
          <span className={styles.preco}>{formatarPreco(servico.preco)}</span>
        </div>

        <Link href={`/servicos/${servico.id}`} className={styles.botao}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}