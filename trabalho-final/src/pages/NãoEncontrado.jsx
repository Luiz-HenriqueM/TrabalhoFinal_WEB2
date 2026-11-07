import { Link } from 'react-router-dom'
import estilos from '../App.module.css'

function NaoEncontrado() {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <p className={estilos.vazio}>
        O endereço que você digitou não existe. <Link to="/">Voltar para a busca</Link>
      </p>
    </main>
  )
}

export default NaoEncontrado