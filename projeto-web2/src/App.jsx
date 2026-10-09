import './App.css'
import Botao from './components/Botao'
import Pratos from './components/Prato'
import { useState } from 'react'

function App() {


    const [salvo, setSalvo] = useState([]);

  
        return (
    <div>
      <header>
      <h1>Cardápio</h1>
      </header>
      <section>
      
      <Pratos onAdicionar={(prato) => setSalvo([...salvo, prato.nome])} />
    <Botao />
      <h4>Meu Prato</h4>
      {salvo.map(salvo => <p>{salvo}</p>)}
      
      </section>
    </div>
  )
}

export default App
