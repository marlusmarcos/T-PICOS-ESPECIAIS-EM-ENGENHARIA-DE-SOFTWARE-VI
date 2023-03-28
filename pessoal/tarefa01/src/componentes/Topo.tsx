import  { useState } from 'react';
import Item, {type ItemInterface} from './Item';
import Total from './Total';
import styles from '../css/teste.module.css';
import Resumo from './Resumo'; 


function Topo () {

    const [count, setCount] = useState(0);
    const [valor, setValor] = useState (0);


    function incrementCount (v: number) {
        setCount (count+1)
        setValor (v)
    }
    function decrementCount  (value: number)  {

        if (count <= 0) window.alert ("Impossível diminuir valor menor que 0");
            else {
                if (value == 1) {
                    setCount (count-1)
                } else {
                    setCount (count-value)
                }
                
            }
    }


    return (
        
        <div className={styles.container}>
            <div  className={styles.items}>
                <p className={styles.topo}>
                    Carrinho de compras
                </p>
                <Total total={count}/>
                <hr />
                <Item nome={"pizza" } descricao={"pizza com cabalbresa e Mussarela"} preco={30} incrementCount={incrementCount} decrementCount = { decrementCount}/>
                <Item nome={"pizza" } descricao={"pizza frango com catupry"} preco={51.5} incrementCount={incrementCount} decrementCount = { decrementCount}/>
                <Item nome={"pizza" } descricao={"pizza 4 queijos"} preco={10.5} incrementCount={incrementCount} decrementCount = { decrementCount}/>
                <Item nome={"pizza" } descricao={"pizza portuguesa"} preco={20} incrementCount={incrementCount} decrementCount = { decrementCount}/>      
            </div>
            <Resumo qtd_items={count} total_valor={valor} />

        </div>
        
        
        
    )

}


export default Topo