// @flow
import * as React from 'react';
import '../../main.css'
import {Link} from "react-router-dom";
import {NavImg} from "../../components/NavImg";

type Props = {
};
export const SetupInicial = (props: Props) => {
    return (
        <div className="content-home" style={{backgroundColor: '#1c1c1c', height: '100vh'}}>

            <NavImg/>

            <header className="header-code-shop">

                <div className="container">
                    <div className="row">
                        <div className="col-md-5">

                            <h1>Tenha sua própria loja em minutos!</h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, blanditiis
                                consequuntur cupiditate delectus dicta dolores ex neque nihil odit perspiciatis placeat
                                ratione
                                rerum saepe sit soluta, tenetur voluptate, voluptatem!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, blanditiis
                                consequuntur cupiditate delectus dicta dolores ex neque nihil odit perspiciatis placeat
                                ratione
                                rerum saepe sit soluta, tenetur voluptate, voluptatem!
                            </p>

                            <Link to="/planos" title="Clique aqui para começar" className="btn btn-info">Clique aqui para
                                começar</Link>

                        </div>
                    </div>
                </div>

            </header>

        </div>
    );
};