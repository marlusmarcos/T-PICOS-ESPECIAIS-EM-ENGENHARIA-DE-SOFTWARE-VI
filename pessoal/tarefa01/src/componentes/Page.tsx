import { useState } from "react";
import Resumo from "./Resumo"
import Topo from "./Topo"

function Page () {
    const [count, setCount] = useState(0);
    const [valor, setValor] = useState (0);
    return (
        <div>
            <Topo />
            <Resumo qtd_items={count} total_valor={valor} />
        </div>
    ) 


}

export default Page