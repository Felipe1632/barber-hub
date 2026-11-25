import './globals.css';
import Cabecalho from '@/components/Cabecalho/Cabecalho';

export const metadata = {
  title: 'BarberHub - Catálogo de Serviços',
  description: 'Agendamento e catálogo de serviços de barbearia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
        <Cabecalho />
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
