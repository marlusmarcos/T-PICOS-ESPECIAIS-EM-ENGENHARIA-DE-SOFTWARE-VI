import  { useState } from 'react';
import styles from '../css/teste.module.css';
import { useContext } from 'react';
import { TotalContext } from '../context/TotalContext';

export type ResumoInterface = {
    qtd_items: number
    total_valor: number
    handle_items: (params: any) => void;
    handle_valor: (params: any) => void;  
}

function Resumo ({qtd_items, total_valor}: ResumoInterface) {

    const [frete, setFrete] = useState (30)
    const [total, setTotal] = useState (0);
    const valorTotal = useContext(TotalContext);

    function handleTotal () {
        setTotal(total + total_valor)
    }


    return (
        <div className={styles.resumo}>
            <div>
                <p className={styles.pResumo}>
                    <strong>Resumo</strong> 
                </p>
            <hr />
            </div>
            <div className={styles.pResumo}>
                <p>Items: ({qtd_items})</p>
                <p>Frete: $44</p>
                <hr />
                <p>Total: {total} </p>
            </div>
            
        </div>
    )
}

export default  Resumo;