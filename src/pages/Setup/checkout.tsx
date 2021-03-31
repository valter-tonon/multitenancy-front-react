// @flow 
import * as React from 'react';
import {NavImg} from "../../components/NavImg";
import boleto from "../../assets/images/slip.png"
import cartoes from "../../assets/images/card.png"
import {useParams} from 'react-router'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {api} from "../../util/api";
import { Redirect } from 'react-router-dom';

interface IFormInputs {
    name: string,
    estado: any
}


export const Checkout = () => {
    // @ts-ignore
    const {id}= useParams()
    const [loja, setLoja] = useState('')
    const [success, setSuccess] = useState(false)
    const {register, handleSubmit, watch, setValue} = useForm<IFormInputs>()


    useEffect(()=> {
        if (id) {
            setLoja(id)
        }
    },[])


    async function onSubmit(data: any) {
        try {
            await api.post('subscribe', data)
            setSuccess(true)
        } catch (e) {
            console.error(e)
        }


    }


    return (
        <div className="content-payment" style={{backgroundColor: "#1c1c1c", height: "100vh"}}>
            <NavImg/>
            <section className="payment">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-payment">
                        <h2 className="text-center text-warning p-5">Olá {loja}, falta pouco...</h2>
                            <div>
                                <input name="loja" type="hidden" value={loja} ref={register} />

                                <div className="col-lg-12 d-flex justify-content-center" >
                                        <div className="payment-method col-6">

                                            <h3>Dados para Pagamento</h3>

                                            <div className="row">
                                                <div className="col-md-12">

                                                    <div className="row">
                                                        <div className="col-md-12 col-check">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                       name="PaymentMethod"
                                                                       id="card" value="credit_card" checked/>
                                                                    <label className="form-check-label" htmlFor="card">
                                                                        <img src={cartoes} alt="Cartão"
                                                                             className="img-fluid"/>
                                                                    </label>
                                                            </div>
                                                            <div className="form-check form-check-inline two">
                                                                <input className="form-check-input" type="radio"
                                                                       name="PaymentMethod"
                                                                       id="slip" value="boleto"/>
                                                                    <label className="form-check-label" htmlFor="slip">
                                                                        <img src={boleto} alt="Boleto"
                                                                             className="img-fluid"/>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <fieldset id="fieldsetCard" >

                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <div className="form-group">
                                                                    <label htmlFor="cardNumber" className="sr-only">Número
                                                                        do cartão</label>
                                                                    <input type="text" id="cardNumber"
                                                                           className="form-control"
                                                                           name="card_number" value="111111111"
                                                                           placeholder="Número do cartão"
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="cvv" className="sr-only">CVV</label>
                                                                    <input type="text" id="cvv" className="form-control"
                                                                           name="cvv"
                                                                           value="123" placeholder="CVV"
                                                                           required/>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <div className="form-group">
                                                                    <label htmlFor="CardName" className="sr-only">Titular
                                                                        do cartão</label>
                                                                    <input type="text" id="CardName"
                                                                           className="form-control"
                                                                           name="card_holder_name" value="Teste 1"
                                                                           placeholder="Titular do cartão"
                                                                           required/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="cardDate"
                                                                           className="sr-only">MM/AA</label>
                                                                    <input type="text" id="cardDate"
                                                                           className="form-control"
                                                                           name="card_date" placeholder="MM/AA"
                                                                           value="111111111"
                                                                           required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group form-btn">
                                        <input id="btnSubmit" type="submit" className="btn btn-info" value="Terminar"/>
                                    </div>
                                </div>
                    </form>


                </div>

            </section>
            {
                success &&
                    <Redirect to={`/success/${loja}`}/>
            }

        </div>
    );
};