import  { useState } from 'react';

export type TotalProps = {
    total: number;
}
function Total ({total}: TotalProps) {

    return(
        <>
        <h4>você tem {total} itens</h4>
        </>
    )
}
export default Total;