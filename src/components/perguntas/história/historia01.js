import React from 'react';
import {Link} from 'react-router-dom'

export default function Historia01(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Seleção'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 01: Como é conhecido o período em que a Grécia foi dominada pela Macedônia ?</h1>

            <main>
                <Link to='/Pergunta02_Hist'>
                    <button>Arcaico</button>
                    <button onClick={() => prop.onClick()}>Helenísio</button>
                    <button>Homério</button>
                </Link>
            </main>

        </div>
    )
}