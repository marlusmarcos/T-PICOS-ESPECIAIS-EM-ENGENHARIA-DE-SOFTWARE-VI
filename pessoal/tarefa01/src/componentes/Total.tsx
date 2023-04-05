import  { useState } from 'react';

export type TotalProps = {
    total: number;
}
function Total ({total}: TotalProps) {
    const [valor, setValor] = useState(0);


    return(
        <>
        <h4>você tem {total} itens</h4>
        </>
    )
}
export default Total;