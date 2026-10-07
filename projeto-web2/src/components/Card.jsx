function Card(props) {
  return (
    <div className="card">
        <h2> {props.nome}</h2>
        <h4> Preço: R$ {props.preco} </h4>
        <h4> { props.disponivel ? "Em estoque " : "Esgotado"}  </h4>
    </div>
  )
}




export default Card