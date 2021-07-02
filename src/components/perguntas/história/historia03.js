import React from 'react';
import {Link} from 'react-router-dom'

export default function Historia03(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta02_Hist'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 03: Qual a aliança em torno de Esparta para derrotar Atenas</h1>

            <main>
                <Link to='/Pergunta04_Hist'>
                    <button onClick={() => prop.onClick()}>Liga do Peloponeso</button>
                    <button>Liga de Delos</button>
                    <button>Liga de Ática</button>
                </Link>
            </main>

        </div>
    )
}