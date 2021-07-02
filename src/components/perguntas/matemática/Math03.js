import React from 'react';

import {Link} from 'react-router-dom'

export default function Math03(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta02_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 03: em um dado de 6 lados, qual a probabilidade de cair um número par ?</h1>

            <main>
                <Link to='/Pergunta04_Math'>
                    <button>33,3%</button>
                    <button>60%</button>
                    <button onClick={() => prop.onClick()}>50%</button> 
                </Link>
            </main>


        </div>
    )
}