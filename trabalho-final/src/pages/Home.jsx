import { useState, useEffect } from 'react'
import Card from '../components/Card'
import estilos from '../App.module.css'

function Home({ series, aoAdicionar }) {
  const [busca, setBusca] = useState('') // o que está digitado no campo
  const [termo, setTermo] = useState('') // o que foi enviado para buscar
  const [resultados, setResultados] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  // Roda ao abrir a página e de novo toda vez que o termo da busca mudar
  useEffect(() => {
    let ativo = true // vira false se o termo mudar antes da resposta chegar

    const carregar = async () => {
      setCarregando(true)
      setErro('')

      try {
        // Sem termo: lista de séries para começar. Com termo: busca por nome.
        const endereco =
          termo === ''
            ? 'https://api.tvmaze.com/shows?page=0'
            : `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`

        const resposta = await fetch(endereco)
        if (!resposta.ok) throw new Error('Falha na busca')

        const dados = await resposta.json()

        // A busca devolve { show: {...} } em cada item; a lista devolve a série direto
        if (ativo) setResultados(termo === '' ? dados.slice(0, 12) : dados.map((item) => item.show))
      } catch {
        if (ativo) setErro('Não foi possível buscar as séries. Tente de novo.')
      } finally {
        if (ativo) setCarregando(false)
      }
    }

    carregar()

    // LIMPEZA: a resposta antiga é ignorada
    return () => {
      ativo = false
    }
  }, [termo])

  const buscar = (evento) => {
    evento.preventDefault()
    setTermo(busca.trim())
  }

  return (
    <main>
      <h1>Buscar séries</h1>

      <form className={estilos.formulario} onSubmit={buscar}>
        <label htmlFor="busca">Nome da série</label>
        <input
          id="busca"
          type="text"
          placeholder="Ex.: Breaking Bad"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <h2>{termo === '' ? 'Para começar' : `Resultados para "${termo}"`}</h2>

      {carregando && <p className={estilos.mensagem}>Carregando...</p>}
      {erro && <p className={estilos.erro}>{erro}</p>}
      {!carregando && !erro && resultados.length === 0 && (
        <p className={estilos.vazio}>Nenhuma série encontrada.</p>
      )}

      <ul className={estilos.grade}>
        {resultados.map((serie) => (
          <Card
            key={serie.id}
            serie={serie}
            jaAdicionada={series.some((minha) => minha.idSerie === serie.id)}
            aoAdicionar={aoAdicionar}
          />
        ))}
      </ul>
    </main>
  )
}

export default Home