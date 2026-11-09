import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Series from './pages/Series'
import NaoEncontrado from './pages/NãoEncontrado'

function App() {
  
  const [series, setSeries] = useState(() => {
    const salvo = localStorage.getItem('minhas-series')
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem('minhas-series', JSON.stringify(series))
  }, [series])

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

  const editar = (idSerie, dados) => {
    setSeries(series.map((serie) => (serie.idSerie === idSerie ? { ...serie, ...dados } : serie)))
  }

  const remover = (idSerie) => {
    setSeries(series.filter((serie) => serie.idSerie !== idSerie))
  }

  return (
    <BrowserRouter>
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