
import React , {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './StylesPages/Page.css'

import Inicio from './inicio';
import Selecao from './seleção';
import Creditos from '../components/créditos/creditos'

//--------------MATEMÁTICA-------------------//

import Math01 from '../components/perguntas/matemática/Math01';
import Math02 from '../components/perguntas/matemática/Math02';
import Math03 from '../components/perguntas/matemática/Math03';
import Math04 from '../components/perguntas/matemática/Math04';
import Math05 from '../components/perguntas/matemática/Math05';

//--------------[História]-------------------//

import Historia01 from '../components/perguntas/história/historia01';
import Historia02 from '../components/perguntas/história/historia02';
import Historia03 from '../components/perguntas/história/historia03';
import Historia04 from '../components/perguntas/história/historia04';
import Historia05 from '../components/perguntas/história/historia05';

//--------------BIOLOGIA-------------------//

import Biologia01 from '../components/perguntas/biologia/biologia01';
import Biologia02 from '../components/perguntas/biologia/biologia02';
import Biologia03 from '../components/perguntas/biologia/biologia03';
import Biologia04 from '../components/perguntas/biologia/biologia04';
import Biologia05 from '../components/perguntas/biologia/biologia05';

export default function Body() {

    const [pontos , setPontos] = useState(0)

    return (
        <div className='CorpoDoJogo'>
            <BrowserRouter>
                <Switch>
                    
                    <Route path='/' exact>
                        <Inicio/>
                    </Route>

                    <Route path='/Seleção'>
                        <Selecao onClick={() => setPontos(0)}/>
                    </Route>

                    <Route path='/Pergunta01_Math'>
                        <Math01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Math'>
                        <Math02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Math'>
                        <Math03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Math'>
                        <Math04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Math'>
                        <Math05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                    <Route path='/Pergunta01_Hist'>
                        <Historia01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Hist'>
                        <Historia02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Hist'>
                        <Historia03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Hist'>
                        <Historia04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Hist'>
                        <Historia05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                    <Route path='/Pergunta01_Bio'>
                        <Biologia01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Bio'>
                        <Biologia02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Bio'>
                        <Biologia03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Bio'>
                        <Biologia04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Bio'>
                        <Biologia05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                </Switch>
            </BrowserRouter>

            <h3>Sua pontuação foi: {pontos} resposta(s) corretas</h3>
            <Creditos/>
        </div>
    )
};




