
import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia01(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Seleção'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 01: De acordo com a teoria celular, todos os seres vivos têm células. Qual destes não é um ser vivo ?</h1>

            <main>
                <Link to='/Pergunta02_Bio'>
                    <button onClick={() => prop.onClick()}>HIV</button>
                    <button>Fungo</button>
                    <button>Musgo</button>
                </Link>
            </main>

        </div>
    )
}