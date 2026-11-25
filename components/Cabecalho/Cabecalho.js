import Link from 'next/link';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          BarberHub
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Serviços
          </Link>
          <Link href="/categorias" className={styles.link}>
            Categorias
          </Link>
          <Link href="/servicos/novo" className={styles.botaoDestaque}>
            + Novo Serviço
          </Link>
          <Link href="/login" className={styles.link}>
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}