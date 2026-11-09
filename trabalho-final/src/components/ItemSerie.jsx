import { useState } from 'react'
import FormularioSerie from './FormularioSerie'
import estilos from './ItemSerie.module.css'

function ItemSerie({ serie, aoSalvar, aoRemover }) {
  const [editando, setEditando] = useState(false)

  const salvar = (dados) => {
    aoSalvar(serie.idSerie, dados)
    setEditando(false)
  }

  return (
    <li className={estilos.item}>
      {serie.dsImagem ? (
        <img className={estilos.poster} src={serie.dsImagem} alt={`Pôster de ${serie.dsNome}`} />
      ) : (
        <div className={estilos.semPoster}>Sem imagem</div>
      )}

      <div className={estilos.conteudo}>
        <strong className={estilos.nome}>{serie.dsNome}</strong>
        <span className={estilos.detalhe}>
          {serie.dsAno || 'Sem data'} · {serie.dsGeneros || 'Sem gênero'}
        </span>

        {editando ? (
          <FormularioSerie serie={serie} aoSalvar={salvar} aoCancelar={() => setEditando(false)} />
        ) : (
          <>
            <span className={estilos.status}>{serie.dsStatus}</span>
            <span>{serie.nuNota === null ? 'Sem nota' : `Minha nota: ${serie.nuNota}`}</span>
            {serie.dsComentario && <p className={estilos.comentario}>{serie.dsComentario}</p>}

            <div className={estilos.acoes}>
              <button onClick={() => setEditando(true)}>Editar</button>
              <button className={estilos.remover} onClick={() => aoRemover(serie.idSerie)}>
                Remover
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  )
}

export default ItemSerie