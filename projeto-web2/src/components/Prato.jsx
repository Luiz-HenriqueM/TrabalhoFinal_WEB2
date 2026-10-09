 const Pratos = ({onAdicionar}) => {
    const itens = [
        { id: 1, nome: 'Risoto', preco: 10.99, disponivel: true },
        { id: 2, nome: 'Lasanha', preco: 12.99, disponivel: false },
        { id: 3, nome: 'Macarrão', preco: 8.99, disponivel: true },
    ];


    return (

        <div>
        {itens.map(item =>
            <h4 key={item.id} onClick={() => onAdicionar(item)}>{<button>{item.nome}</button>} - R$ {item.preco} - {item.disponivel ? "Em estoque" : "Esgotado"}    
            </h4>
        )}
    </div>
  )
}

export default Pratos