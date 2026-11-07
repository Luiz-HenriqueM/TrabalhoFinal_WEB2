import { Link } from 'react-router-dom'
import ItemSerie from '../components/ItemSerie'
import estilos from '../App.module.css'

function Series({ series, aoEditar, aoRemover }) {
  return (
    <main>
      <h1>Minhas séries</h1>

      {series.length === 0 ? (
        <p className={estilos.vazio}>
          Você ainda não adicionou nenhuma série. <Link to="/">Buscar séries</Link>
        </p>
      ) : (
        <ul className={estilos.lista}>
          {series.map((serie) => (
            <ItemSerie key={serie.idSerie} serie={serie} aoSalvar={aoEditar} aoRemover={aoRemover} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default Series