
import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia02(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta01_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 02: As células são estruturas conhecidas como unidades estruturais e fncionais dos organismos vivos.São formadas por substâncias orgânicas e inorgânicas.São consideradas inorgânicas</h1>

            <main>
                <Link to='/Pergunta03_Bio'>
                    <button>Lipídios e Proteínas.</button>
                    <button onClick={() => prop.onClick()}>água e sais minerais.</button>
                    <button>água e vitaminas.</button>
                </Link>
            </main>

        </div>
    )
}