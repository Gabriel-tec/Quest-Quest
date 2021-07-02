import React from 'react';
import {Link} from 'react-router-dom'

export default function Historia02(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta01_Hist'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 02: Quando teve início a idade média ?</h1>

            <main>
                <Link to='/Pergunta03_Hist'>
                    <button>463 D.C</button>
                    <button>472 D.C</button>
                    <button onClick={() => prop.onClick()}>476 D.C</button>
                </Link>
            </main>

        </div>
    )
}