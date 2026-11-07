import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Series from './pages/Series'
import NaoEncontrado from './pages/NãoEncontrado'

function App() {
  // CARREGAR: a função roda só na primeira montagem, antes do primeiro desenho
  const [series, setSeries] = useState(() => {
    const salvo = localStorage.getItem('minhas-series')
    return salvo ? JSON.parse(salvo) : []
  })

  // SALVAR: toda vez que series mudar (adicionar, editar, remover), grava
  useEffect(() => {
    localStorage.setItem('minhas-series', JSON.stringify(series))
  }, [series])

  // CRIAR: guarda na minha lista uma série que veio da API
  const adicionar = (serie) => {
    if (series.some((minha) => minha.idSerie === serie.id)) return

    const novaSerie = {
      idSerie: serie.id,
      dsNome: serie.name,
      dsImagem: serie.image ? serie.image.medium : '',
      dsAno: serie.premiered ? serie.premiered.slice(0, 4) : '',
      dsGeneros: serie.genres.join(', '),
      dsStatus: 'Quero assistir',
      nuNota: null,
      dsComentario: '',
    }

    setSeries([...series, novaSerie])
  }

  // EDITAR: troca só os campos que mudaram na série com esse id
  const editar = (idSerie, dados) => {
    setSeries(series.map((serie) => (serie.idSerie === idSerie ? { ...serie, ...dados } : serie)))
  }

  // REMOVER: devolve a lista sem a série com esse id
  const remover = (idSerie) => {
    setSeries(series.filter((serie) => serie.idSerie !== idSerie))
  }

  return (
    <BrowserRouter>
      {/* Fica fora das Routes: aparece em todas as páginas */}
      <Menu quantidade={series.length} />
      <Routes>
        <Route path="/" element={<Home series={series} aoAdicionar={adicionar} />} />
        <Route path="/series" element={<Series series={series} aoEditar={editar} aoRemover={remover} />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App