const Catalogo = ({ onAdicionar }) => {
    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 39.9, disponivel: true },
        { id: 2, nome: 'Tênis', preco: 199.9, disponivel: false },
        { id: 3, nome: 'Boné', preco: 29.9, disponivel: true },
    ];

    return (
        <div>
            <h2>Catálogo</h2>
            {produtos.map(produto =>
                <h4 key={produto.id}>
                    <button
                        disabled={!produto.disponivel}
                        onClick={() => onAdicionar(produto)}>
                        {produto.nome}
                    </button> - R$ {produto.preco.toFixed(2)} - {produto.disponivel ? "Em estoque" : "Esgotado"}
                </h4>
            )}
        </div>
    )
}

export default Catalogo