import styles from './Filtro.module.css';

export default function Filtro({
  categorias,
  categoriaSelecionada,
  onSelecionarCategoria,
  ordenacao,
  onMudarOrdenacao,
}) {
  return (
    <section className={styles.barra}>
      <div className={styles.categorias}>
        <button
          type="button"
          onClick={() => onSelecionarCategoria('todas')}
          className={`${styles.botaoCategoria} ${
            categoriaSelecionada === 'todas' ? styles.ativo : ''
          }`}
        >
          Todas
        </button>

        {categorias.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelecionarCategoria(String(cat.id))}
            className={`${styles.botaoCategoria} ${
              categoriaSelecionada === String(cat.id) ? styles.ativo : ''
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      <div className={styles.ordenacao}>
        <label htmlFor="ordenar" className={styles.label}>
          Ordenar por:
        </label>
        <select
          id="ordenar"
          value={ordenacao}
          onChange={(e) => onMudarOrdenacao(e.target.value)}
          className={styles.select}
        >
          <option value="padrao">Padrão</option>
          <option value="preco-asc">Menor preço</option>
          <option value="preco-desc">Maior preço</option>
          <option value="duracao-asc">Menor duração</option>
          <option value="duracao-desc">Maior duração</option>
        </select>
      </div>
    </section>
  );
}