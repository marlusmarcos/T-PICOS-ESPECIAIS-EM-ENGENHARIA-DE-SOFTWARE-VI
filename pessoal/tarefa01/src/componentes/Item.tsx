import { ReactEventHandler, useState, createContext, useContext } from "react";
import styles from '../css/teste.module.css';
import TotalPagar from "./TotalPagar";

export type ItemInterface = {
    id: number,
    urlItem: string
    nome: string
    descricao: string
    preco: number
    incrementCount: (params: any) => void; 
    decrementCount: (params: any) => void; 
}

function Item ({id, urlItem, nome, descricao, preco, incrementCount, decrementCount}: ItemInterface) {


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
        <img src= {urlItem} className={styles.imagem}/>
        <div className={styles.informacao}>
            <p>
                <strong>
                {nome}
                </strong>
            </p>
            <p>
                {descricao}
            </p>
            <p>
                {preco}
            </p>
        </div>
        <div className={styles.elementos}>
            <h3>{total}</h3>
        </div>
        <TotalPagar total={precoUnico} quantidade={total} preco={preco} />
        <div className={styles.elementosButton}>
            <button onClick={incrementTotal} > +</button>
            <button onClick={() => decrementTotal(1)}> -</button>
            <button onClick={() =>decrementTotal(total-1)}> Excluir</button>
        </div>
        </div>
        <hr />
        </>
    )
}
export default Item;