import React from 'react';

import {Link} from 'react-router-dom'

export default function Math01(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta01_Math'>
                <button>Voltar</button>
            </Link>

            <h1>Pergunta 02: Alguns consideram que a cidade de Florianópolis foi fundada no dia 23 de março de 1726, que caiu em um sábado. Após 90 dias, no dia 21 de junho, a data assinalou o início do inverno, quando a noite é a mais longa do ano. Esse dia caiu em uma:</h1>

            <main>
                <Link to='/Pergunta03_Math'>
                    <button>Quinta-feira</button>
                    <button onClick={() => prop.onClick()}>Sexta-Feira</button>
                    <button>Segunda-Feira</button>
                </Link>
            </main>

        </div>
    )
}