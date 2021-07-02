import React from 'react';
import {Link} from 'react-router-dom'

export default function Historias04(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta03_Hist'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 04: Quantas eram as capitanias hereditárias no colinização ?</h1>

            <main>
                <Link to='/Pergunta05_Hist'>
                    <button>10</button>
                    <button onClick={() => prop.onClick()}>12</button>
                    <button>8</button>
                </Link>
            </main>

        </div>
    )
}