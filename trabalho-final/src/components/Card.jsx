import estilos from './Card.module.css'

function Card({ serie, jaAdicionada, aoAdicionar }) {
  const ano = serie.premiered ? serie.premiered.slice(0, 4) : 'Sem data'
  const generos = serie.genres.length > 0 ? serie.genres.join(', ') : 'Sem gênero'

  return (
    <li className={estilos.card}>
      {serie.image ? (
        <img className={estilos.poster} src={serie.image.medium} alt={`Pôster de ${serie.name}`} />
      ) : (
        <div className={estilos.semPoster}>Sem imagem</div>
      )}

      <div className={estilos.info}>
        <strong className={estilos.nome}>{serie.name}</strong>
        <span className={estilos.detalhe}>
          {ano} · {generos}
        </span>
        <span className={estilos.detalhe}>
          {serie.rating.average ? `Nota no TVmaze: ${serie.rating.average}` : 'Sem nota no TVmaze'}
        </span>

        <button disabled={jaAdicionada} onClick={() => aoAdicionar(serie)}>
          {jaAdicionada ? 'Já está na lista' : 'Adicionar à minha lista'}
        </button>
      </div>
    </li>
  )
}

export default Card