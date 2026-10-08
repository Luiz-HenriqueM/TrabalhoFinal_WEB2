import { useState } from 'react';



function Botao() {
  const [lista, setLista] = useState(0); //

  return (
    <div>
        <h2>Quantidade de cliques: {lista}</h2>
      <button onClick={() => setLista(lista + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Botao;
