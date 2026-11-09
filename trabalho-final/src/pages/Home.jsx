import { useState, useEffect } from 'react'
import Card from '../components/Card'
import estilos from '../App.module.css'

function Home({ series, aoAdicionar }) {
  const [busca, setBusca] = useState('') 
  const [termo, setTermo] = useState('') 
  const [resultados, setResultados] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  
  useEffect(() => {
    let ativo = true

    const carregar = async () => {
      setCarregando(true)
      setErro('')

      try {
        const endereco =
          termo === ''
            ? 'https://api.tvmaze.com/shows?page=0'
            : `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`

        const resposta = await fetch(endereco)
        if (!resposta.ok) throw new Error('Falha na busca')

        const dados = await resposta.json()
        if (ativo) setResultados(termo === '' ? dados.slice(0, 12) : dados.map((item) => item.show))
      } catch {
        if (ativo) setErro('Não foi possível buscar as séries. Tente de novo.')
      } finally {
        if (ativo) setCarregando(false)
      }
    }

    carregar()
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