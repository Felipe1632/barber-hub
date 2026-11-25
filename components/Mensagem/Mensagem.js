import styles from './Mensagem.module.css';

export default function Mensagem({ texto, tipo = 'info' }) {
  if (!texto) return null;

  return (
    <div className={`${styles.mensagem} ${styles[tipo]}`}>
      {texto}
    </div>
  );
}