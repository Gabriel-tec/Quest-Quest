import React from 'react';

import {Link} from 'react-router-dom'

export default function Math04(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta03_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 04: Dada a área do quadrado 64, qual a medida do seu lado ?</h1>

            <main>
                <Link to='/Pergunta05_Math'>
                    <button>32</button>
                    <button>16</button>
                    <button onClick={() => prop.onClick()}>8</button>
                </Link>
            </main>

        </div>
    )
}