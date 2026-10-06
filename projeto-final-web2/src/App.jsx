import './App.css'
import minhaFoto from './assets/me.jpg'
import Card from  './components/Card'


function App() {
  return (
    <div>


      <img src={minhaFoto} alt="Foto do Luiz" className="pessoa" />

      <h2>Luiz Henrique</h2>

      <Card titulo="Meus Dados" />
      <h3> Idade: 18 anos</h3>
      <h3> Profissão: Estudante</h3>
            

      <Card titulo="Meus Hobbies" />
      <h3> Ver Filmes</h3>
      <h3> Jogar Video Game</h3>
    </div>
  )
}

export default App