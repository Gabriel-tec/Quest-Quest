import React from 'react';

import {Link} from 'react-router-dom'

export default function Selecao(prop){
    return(
        <div className='SeleçãoDePerguntas'>
            <Link to='/'>
                <button>Volta</button>
            </Link>
            

            <h1>Seleção</h1>
            
            <main>
                <Link to='/Pergunta01_Math'>
                    <button  onClick={() => prop.onClick()}>Matemática</button>
                </Link>

                <Link to='/Pergunta01_Hist'>
                    <button onClick={() => prop.onClick()}>História</button>
                </Link>
                
                <Link to='/Pergunta01_Bio'>
                    <button onClick={() => prop.onClick()}>Biologia</button>
                </Link>
            </main>
  
        </div>
    )
}