import React from 'react';
import {Link} from 'react-router-dom'

export default function Historia05(prop){
    return(
        <div className='PerguntasDoJogo'>
            <Link to='/Pergunta04_Hist'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 05:Qual evento marcou o início da Revolução Francesa ?</h1>

            <main>
                <Link to='/Seleção'>
                    <button onClick={() => prop.onClick()}>Tomada de Bastilha</button>
                    <button>Formação do Diretório</button>
                    <button>Decaptação de Luí XVI</button>
                </Link>
            </main>


        </div>
    )
}