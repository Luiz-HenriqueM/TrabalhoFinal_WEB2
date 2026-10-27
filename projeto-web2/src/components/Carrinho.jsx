const Carrinho = ({ compras }) => {
    const total = compras.reduce((soma, produto) => soma + produto.preco, 0);

    return (
        <div>
            <h2>Carrinho</h2>
            {compras.map((produto, indice) =>
                <p key={indice}>{produto.nome} - R$ {produto.preco.toFixed(2)}</p>
            )}
            <h4>Total: R$ {total.toFixed(2)}</h4>
        </div>
    )
}

export default Carrinho
