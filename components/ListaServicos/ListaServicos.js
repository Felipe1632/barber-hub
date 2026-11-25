import CardServico from '@/components/CardServico/CardServico';
import Mensagem from '@/components/Mensagem/Mensagem';
import styles from './ListaServicos.module.css';

export default function ListaServicos({ servicos }) {
  if (!servicos || servicos.length === 0) {
    return (
      <Mensagem
        texto="Nenhum serviço encontrado para esta categoria."
        tipo="info"
      />
    );
  }

  return (
    <section className={styles.grid}>
      {servicos.map((servico) => (
        <CardServico key={servico.id} servico={servico} />
      ))}
    </section>
  );
}