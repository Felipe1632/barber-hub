'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './FormServico.module.css';

export default function FormServico({ categorias, valoresIniciais, onSalvar }) {
  const [nome, setNome] = useState(valoresIniciais?.nome || '');
  const [descricao, setDescricao] = useState(valoresIniciais?.descricao || '');
  const [duracaoMin, setDuracaoMin] = useState(
    valoresIniciais?.duracaoMin ? String(valoresIniciais.duracaoMin) : ''
  );
  const [preco, setPreco] = useState(
    valoresIniciais?.preco ? String(valoresIniciais.preco) : ''
  );
  const [categoriaId, setCategoriaId] = useState(
    valoresIniciais?.categoriaId ? String(valoresIniciais.categoriaId) : ''
  );
  const [imagemUrl, setImagemUrl] = useState(valoresIniciais?.imagemUrl || '');
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!nome.trim()) {
      novosErros.nome = 'O nome do serviço é obrigatório.';
    }

    if (!categoriaId) {
      novosErros.categoriaId = 'Selecione uma categoria.';
    }

    const duracaoNum = Number(duracaoMin);
    if (!duracaoMin || Number.isNaN(duracaoNum)) {
      novosErros.duracaoMin = 'Informe a duração em minutos.';
    } else if (duracaoNum < 15 || duracaoNum > 480) {
      novosErros.duracaoMin = 'A duração deve ficar entre 15 e 480 minutos.';
    } else if (duracaoNum % 15 !== 0) {
      novosErros.duracaoMin = 'A duração deve ser múltipla de 15 (ex: 15, 30, 45, 60).';
    }

    const precoNum = Number(preco);
    if (!preco || Number.isNaN(precoNum) || precoNum <= 0) {
      novosErros.preco = 'O preço é obrigatório e deve ser maior que zero.';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validar()) return;

    onSalvar({
      nome: nome.trim(),
      descricao: descricao.trim(),
      duracaoMin: Number(duracaoMin),
      preco: Number(preco),
      categoriaId: Number(categoriaId),
      imagemUrl: imagemUrl.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.campo}>
        <label htmlFor="nome" className={styles.label}>
          Nome do serviço *
        </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Corte Degradê"
          className={`${styles.input} ${erros.nome ? styles.inputErro : ''}`}
        />
        {erros.nome && <span className={styles.erro}>{erros.nome}</span>}
      </div>

      <div className={styles.campo}>
        <label htmlFor="categoria" className={styles.label}>
          Categoria *
        </label>
        <select
          id="categoria"
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
          className={`${styles.select} ${erros.categoriaId ? styles.inputErro : ''}`}
        >
          <option value="">Selecione...</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>
        {erros.categoriaId && <span className={styles.erro}>{erros.categoriaId}</span>}
      </div>

      <div className={styles.linhaDupla}>
        <div className={styles.campo}>
          <label htmlFor="duracaoMin" className={styles.label}>
            Duração (minutos) *
          </label>
          <input
            id="duracaoMin"
            type="number"
            step="15"
            min="15"
            max="480"
            value={duracaoMin}
            onChange={(e) => setDuracaoMin(e.target.value)}
            placeholder="Ex: 45"
            className={`${styles.input} ${erros.duracaoMin ? styles.inputErro : ''}`}
          />
          {erros.duracaoMin && <span className={styles.erro}>{erros.duracaoMin}</span>}
        </div>

        <div className={styles.campo}>
          <label htmlFor="preco" className={styles.label}>
            Preço (R$) *
          </label>
          <input
            id="preco"
            type="number"
            step="0.01"
            min="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Ex: 45.00"
            className={`${styles.input} ${erros.preco ? styles.inputErro : ''}`}
          />
          {erros.preco && <span className={styles.erro}>{erros.preco}</span>}
        </div>
      </div>

      <div className={styles.campo}>
        <label htmlFor="descricao" className={styles.label}>
          Descrição (o que está incluído)
        </label>
        <textarea
          id="descricao"
          rows={3}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva os detalhes do atendimento..."
          className={styles.textarea}
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="imagemUrl" className={styles.label}>
          URL da foto (opcional)
        </label>
        <input
          id="imagemUrl"
          type="url"
          value={imagemUrl}
          onChange={(e) => setImagemUrl(e.target.value)}
          placeholder="https://..."
          className={styles.input}
        />
      </div>

      <div className={styles.botoes}>
        <Link href="/" className={styles.botaoCancelar}>
          Cancelar
        </Link>
        <button type="submit" className={styles.botaoSalvar}>
          Salvar Serviço
        </button>
      </div>
    </form>
  );
}