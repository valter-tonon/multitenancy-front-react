// @flow
import * as React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import plansHttp from "../../util/plans-resource";


export const Planos = () => {
    const [plan , setPlan] = useState<any[]>([])
    useEffect(() =>{
        (async () =>{
            try {
                const {data} = await plansHttp.list()
                setPlan(data)
            } catch (e) {
                console.error('Alguma coisa não deu certo')
            }
        })()
    },[])
    return (
        <div className="content-plans" style={{backgroundColor: '#1c1c1c', height: '100vh'}}>
            <section className="plans">
                <div className="container">

                    <div className="row justify-content-xl-center">

                        <div className="col-xl-9">
                            <h1>Planos</h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque commodi ex fugit
                                harum natus
                                neque nisi nobis qui sit. Consectetur ducimus ea excepturi mollitia nemo, nisi officiis
                                suscipit
                                vel.
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-xl-center">
                        { plan.map((plano, key) => (
                                <article className="col-lg-4 col-xl-3">
                                    <div className="box-plan" key={key}>

                                        <h2>{plano.name}</h2>

                                        <div className="price">
                                            <p key={key}>{plano.price}</p>
                                            <span>{plano.recurrence}</span>
                                        </div>

                                        <div className="info">
                                            <p>
                                                {plano.description}
                                            </p>
                                        </div>

                                        <Link to={"/planos/"+ plano.id} title="Assinar" className="btn btn-info">Assinar</Link>

                                    </div>
                                </article>
                            ))}

                    </div>
                </div>

            </section>

        </div>
    );
};