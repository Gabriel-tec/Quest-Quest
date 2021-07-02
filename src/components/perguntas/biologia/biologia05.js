import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia05(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta04_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Qual o nome científico do pombo ?</h1>

            <main>
                <Link to='/Seleção'>
                    <button onClick={() => prop.onClick()}>Columbidae</button>
                    <button>Rato Voador</button>
                    <button>Pigeon</button>
                </Link>
            </main>

        </div>
    )
}