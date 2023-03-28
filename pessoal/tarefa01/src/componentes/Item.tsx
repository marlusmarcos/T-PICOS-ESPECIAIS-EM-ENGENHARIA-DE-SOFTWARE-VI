import { ReactEventHandler, useState } from "react";
import styles from '../css/teste.module.css';
export type ItemInterface = {
    nome: string
    descricao: string
    preco: number
    incrementCount: (params: any) => void; 
    decrementCount: (params: any) => void; 
}

function Item ({nome, descricao, preco, incrementCount, decrementCount}: ItemInterface) {

    const [total, setTotal] = useState(1);
    const [precoUnico, setPrecounico] = useState(preco); 
    const [aux, setAux] = useState(1);

    function incrementTotal () {
        setTotal (total+1)
        setPrecounico (precoUnico+preco)
        incrementCount(precoUnico)
    }
    function decrementTotal  (v: number)  {

        if (total <= 0) window.alert ("Impossível diminuir valor menor que 0");
            else {
                if (v == 1) {
                    setTotal (total-1)
                    setPrecounico (preco)
                    decrementCount(1)
                } else {
                    setTotal (0)
                    setPrecounico (preco)
                    decrementCount(v)
                }
                
            }
    }



    return (
        <>
        <div className={styles.item}>
        <div className={styles.informacao}>
            <h1>
                {nome}
            </h1>
            <h2>
                {descricao}
            </h2>
            <h2>
                {precoUnico}
            </h2>
            <h3>{total}</h3>
        </div>
        <div>
            <button onClick={incrementTotal} > Aumentar</button>
            <button onClick={() => decrementTotal(1)}> Diminuir</button>
            <button onClick={() =>decrementTotal(total-1)}> Excluir</button>
        </div>
        </div>
        <hr />
        </>
    )
}
export default Item;