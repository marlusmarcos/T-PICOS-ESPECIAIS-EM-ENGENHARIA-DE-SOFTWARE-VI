import { useState } from "react";
import Resumo from "./Resumo"
import Topo from "./Topo"
import { TotalContext } from "../context/TotalContext";

function Page () {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState (0);
    const data = [
        { id: 1, nome: 'pizza', descricao: 'Queijo, tomate, cebola, calabresa com molho branco' },
        { id: 2, name: 'churrasco',  descricao: 'carne de sol acebolada' },
        { id: 3, name: 'Hot-dog', descricao: 'milho, ervilha, recheio de frango ' },
        { id: 4, name: 'Rerigerante', descricao: 'coca cola' }
      ];

    return (
        <TotalContext.Provider value={{total, setTotal}}>
        <div>
            <Topo />
            <Resumo qtd_items={count} total_valor={total} />
        </div>
        </TotalContext.Provider>
    ) 


}

export default Page