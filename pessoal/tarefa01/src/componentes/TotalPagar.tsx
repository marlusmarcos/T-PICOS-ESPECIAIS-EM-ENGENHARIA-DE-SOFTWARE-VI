import { useState } from "react";
import styles from '../css/teste.module.css';
export type TotalPagar = {
    quantidade: number
    preco: number;
    total: number
}


function TotalPagar ({quantidade, preco, total}: TotalPagar) {
    const [valor, setValor] = useState (quantidade*preco);
    return (
        <div className={styles.elementos}>
            <p>
            R$ {total}
            </p>
        </div>
    )

}
export default TotalPagar