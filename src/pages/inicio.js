
import React from 'react';
import {Link} from 'react-router-dom'

export default function Inicio(){
    return(
        <>
            <h1>QUEST QUEST</h1>
            <Link to='/Seleção'>
                <button>Começar</button>
            </Link>
            
        </>
    )
}