import './App.css'
import Catalogo from './components/Catalogo'
import Carrinho from './components/Carrinho'
import { useState } from 'react'

function App() {

  const [compras, setCompras] = useState([]);

  const adicionar = (produto) => {
    setCompras([...compras, produto]);
  };

  return (
    <div>
      <header>
        <h1>Loja</h1>
      </header>
      <section>
        <Catalogo onAdicionar={adicionar} />
        <Carrinho compras={compras} />
      </section>
    </div>
  )
}

export default App
