
import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia03(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta02_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 03: Indique uma função que a pele não faz:</h1>

            <main>
                <Link to='/Pergunta04_Bio'>
                    <button onClick={() => prop.onClick()}>Captação de estímulos de dor,tato,luz e temperatura.</button>
                    <button>Proteção contra atrito.</button>
                    <button>Barreira protetora contra patógenos.</button>
                </Link>
            </main>

        </div>
    )
}