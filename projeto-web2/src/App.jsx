import './App.css'
import Card from  './components/Card'
import Botao from './components/Botao'

function App() {
    const pratos = [
    { id: 1, nome: 'Risoto', preco: 10.99, disponivel: true },
    { id: 2, nome: 'Lasanha', preco: 12.99, disponivel: false },
    { id: 3, nome: 'Macarrão', preco: 8.99, disponivel: true },
  ];
  
  return (
    <div>
      <header>
      <h1>Cardápio</h1>
      </header>
      <section>
      
    {pratos.map(prato => (
      <Card key={prato.id} nome={prato.nome} preco={prato.preco} disponivel={prato.disponivel} />
      
    ))}
    <Botao />
      </section>
    </div>
  )
}

export default App
