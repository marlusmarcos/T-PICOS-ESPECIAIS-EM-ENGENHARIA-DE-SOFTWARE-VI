import { useState } from "react";
import styles from '../css/teste.module.css';
export type TotalPagar = {
    quantidade: number
    preco: number;
}


function TotalPagar ({quantidade, preco}: TotalPagar) {
    const [valor, setValor] = useState (quantidade*preco);
    return (
        <div className={styles.elementos}>
            <h3>
                {valor}
            </h3>
        </div>
    )

}
export default TotalPagar