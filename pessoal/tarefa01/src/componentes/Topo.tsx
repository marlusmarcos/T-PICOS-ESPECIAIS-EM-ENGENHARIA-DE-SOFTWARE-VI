import  { useEffect, useState } from 'react';
import Item, {type ItemInterface} from './Item';
import Total from './Total';
import styles from '../css/teste.module.css';
import Resumo from './Resumo'; 

export type TopoInterface = {
    _count : number
    _valor:  number
}
type Produto = {
    id: number,
    urlItem: string,
    nome: string;
    descricao: string
    preco: number;
  }

function Topo () {

    
    const [valor, setValor] = useState (0);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setProdutos([
        { id: 1, urlItem: '../public/assets/pizza.jpg', nome: 'pizza', descricao: 'Queijo, tomate, cebola, calabresa com molho branco', preco: 50 },
        { id: 2, urlItem: '../public/assets/churrasco.jpg',nome: 'churrasco',  descricao: 'carne de sol acebolada', preco: 20 },
        { id: 3, urlItem: '../public/assets/hotdog.jpg',nome: 'Hot-dog', descricao: 'milho, ervilha, recheio de frango ', preco: 5 },
        { id: 4, urlItem: '../public/assets/coca.jpg',nome: 'Rerigerante', descricao: 'coca cola', preco: 8 }
        ]);
      }, [setCount(produtos.length)]);

    

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
                <h3 className={styles.topo}>
                    <strong>Carrinho de compras</strong> 
                </h3>
                <Total total={count}/>
                <hr />
                {produtos.map((item, index) => (
                    <Item id={item.id} urlItem={item.urlItem} nome={item.nome} descricao={item.descricao} preco={item.preco} incrementCount={incrementCount} decrementCount={decrementCount} />
                )
                )
                
                }
                </div>
            <Resumo qtd_items={count} total_valor={valor} />

        </div>
        
        
        
    )

}

export default Topo