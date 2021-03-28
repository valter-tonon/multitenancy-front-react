// @flow
import * as React from 'react';
import {NavImg} from "../../components/NavImg";
import congrats from "../../assets/images/congrat.png"

type Props = {

};
export const SubscribeSuccess = (props: Props) => {
    return (
        <div className="content-plans" style={{backgroundColor: '#1c1c1c', height: '100vh'}}>
            <NavImg/>

            <section className="plans">
                <div className="container">
                    <div className="row justify-content-xl-center p-5">

                        <div className="col-xl-9 mt-5 p-3 rounded-lg" style={{background: "rgba(0,0,0,0.6)", zIndex: 1}}>
                            <h1 className="text-warning">Parabéns !!!</h1>

                            <h3 className="text-center text-light mt-5">
                               Em instantes você irá receber um e-mail com instruções e dados de acesso ao painel admistrativo da sua loja.
                            </h3>
                        </div>
                        <img src={congrats} alt="Obrigado" width={"500px"} style={{position: "absolute"}}/>
                    </div>
                </div>
            </section>

        </div>
    );
};