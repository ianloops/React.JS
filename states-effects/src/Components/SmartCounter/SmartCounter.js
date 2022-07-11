import {useState} from 'react';

function SmartCounter(){
    //retorna um vetor [variável stateful, função atrelada a variável que atualiza]
    const [quantity, upQuantity] = useState(10)

    return(
        <>
        <h1>{quantity}</h1>
        <button onClick={()=> upQuantity(quantity+1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;