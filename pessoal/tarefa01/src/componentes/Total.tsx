import  { useState } from 'react';

export type TotalProps = {
    total: number;
}
function Total ({total}: TotalProps) {
    const [valor, setValor] = useState(0);


    return(
        <>
        <h3>você tem {total} itens</h3>
        </>
    )
}
export default Total;