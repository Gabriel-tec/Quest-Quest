
import React from 'react';

import {Link} from 'react-router-dom'

export default function Math01(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Seleção'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 01: Quais são as raízes reais da equação x2 – x = 6 ?</h1>

            <main>
                <Link to='/Pergunta02_Math'>
                    <button onClick={() => prop.onClick()}>3 e -2</button>
                    <button>25 e 3</button>
                    <button>25 e -2</button>
                </Link>
            </main>

        </div>
    )
}