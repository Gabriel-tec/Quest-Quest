import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia04(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta03_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 04: A primeira lei de Mendel, conhecida também com princípio da segregação dos caracteres ou lei de segregação, afirma que: </h1>

            <main>
                <Link to='/Pergunta05_Bio'>
                    <button>Cada par de fatores segrega-se de maneira independente de outros pares durante a formação dos gametas.</button>
                    <button onClick={() => prop.onClick()}>Cada característica é condicionada por um par de fatores que se separam na formação dos gametas.</button>
                    <button>Cada característica é condicionada por um fator ue não se separa na formação de gametas.</button>
                </Link>
            </main>

        </div>
    )
}