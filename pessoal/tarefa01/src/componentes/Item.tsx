import { ReactEventHandler, useState } from "react";

export type ItemInterface = {
    nome: string
    descricao: string
    preco: number
    incrementCount: (params: any) => void; 
    decrementCount: (params: any) => void; 
}

function Item ({nome, descricao, preco, incrementCount, decrementCount}: ItemInterface) {

    const [total, setTotal] = useState(0);
    const [aux, setAux] = useState(1);

    function incrementTotal () {
        setTotal (total+1)
        incrementCount(null)
    }
    function decrementTotal  (v: number)  {

        if (total <= 0) window.alert ("Impossível diminuir valor menor que 0");
            else {
                if (v == 1) {
                    setTotal (total-1)
                    decrementCount(1)
                } else {
                    setTotal (0)
                    decrementCount(v)
                }
                
            }
    }



    return (
        <>
        <div>
            <h1>
                {nome}
            </h1>
            <h2>
                {descricao}
            </h2>
            <h2>
                {preco}
            </h2>
            <h3>{total}</h3>
        </div>
        <div>
            <button onClick={incrementTotal} > Aumentar</button>
            <button onClick={() => decrementTotal(1)}> Diminuir</button>
            <button onClick={() =>decrementTotal(total)}> Excluir</button>
        </div>
        
        </>
    )
}
export default Item;