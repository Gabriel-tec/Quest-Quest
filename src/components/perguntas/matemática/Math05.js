import React from 'react';

import {Link} from 'react-router-dom'

export default function Math05(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta04_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 05: Caminhando ao fim da tarde, uma senhora contou 20 casas em uma rua à sua direita. No regresso, ela contou 20 casas à sua esquerda. Quantas casas ela viu no total ?</h1>

            <main>
                <Link to='/Seleção'>
                    <button onClick={() => prop.onClick()}>20</button>
                    <button>40</button>
                    <button>10</button>
                </Link>
            </main>
            
        </div>
    )
}