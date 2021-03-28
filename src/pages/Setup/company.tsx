// @flow 
import * as React from 'react';
import {NavImg} from "../../components/NavImg";
import {useEffect, useState} from "react";
import {useParams} from 'react-router'
import plansHttp from "../../util/plans-resource";
import creditCard from '../../assets/images/card.png'
import boleto from '../../assets/images/slip.png'
import {useForm} from "react-hook-form";
import {api} from "../../util/api";
import { Redirect } from 'react-router-dom';

interface IFormInputs {
    name: string,
    estado: any
}

export const Company = () => {
    // @ts-ignore
    const {id}= useParams()
    const [succes, setSuccess] = useState<boolean>(false)
    const [plan, setPlan] = useState({
        name:'Nome',
        description: '',
        id:''
    })
    const {register, handleSubmit, watch, setValue} = useForm<IFormInputs>({
        defaultValues:{estado:''}
    })

    useEffect(() =>{
        register({name: "estado"})
    },[register])

    useEffect(() =>{
        if (!id) {
            return
        }
        (async()=>{
           try {
               const {data} = await plansHttp.get(id)
               setPlan(data)
           } catch (e) {
               console.error(e)
           }
        })()
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

                    <div className="row">
                        <div className="col-xl-9">
                            <h1>{plan.name}</h1>
                            <p>{plan.description}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-payment">
                        <input type="hidden" name="plan" value={plan.id} ref={register}/>
                        <input type="hidden" name="plan_id" value="{{ plano.id }}"/>
                            <input name="CardHash" id="CardHash" type="hidden" value=""/>

                                <div className="row row-form justify-content-xl-between">
                                    <div className="col-lg-6 col-xl-5">

                                        <h3>Dados pessoais:</h3>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="sr-only">Nome</label>
                                                    <input type="text" id="name" className="form-control" name="name"
                                                           placeholder="Nome completo" ref={register} required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="form-group">
                                                        <label htmlFor="email" className="sr-only">Email</label>
                                                        <input type="text" id="email" className="form-control"
                                                               name="email"
                                                               placeholder="Email" ref={register} required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label htmlFor="dddCellphone" className="sr-only">DDD</label>
                                                    <input type="text" id="dddCellphone" className="form-control"
                                                           name="ddd"
                                                           placeholder="DDD" required
                                                           ref={register}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="cellphone" className="sr-only">Celular</label>
                                                    <input type="text" id="cellphone" className="form-control"
                                                           name="phone"
                                                           placeholder="celular" ref={register} required/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="cpf" className="sr-only">CPF</label>
                                                    <input type="text" id="cpf" className="form-control"
                                                           name="document_number"
                                                           placeholder="CPF" required ref={register}/>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="cep" className="sr-only">CEP</label>
                                                    <input type="text" id="cep" className="form-control" name="zipcode"
                                                           placeholder="CEP" required ref={register}/>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <label htmlFor="street" className="sr-only">Rua</label>
                                                    <input type="text" id="street" className="form-control"
                                                           name="street"
                                                           placeholder="Rua" required ref={register}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="number" className="sr-only">Número</label>
                                                    <input type="text" id="number" className="form-control"
                                                           name="street_number"
                                                           placeholder="Número" required ref={register}/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="complement" className="sr-only">Complemento</label>
                                                    <input type="text" id="complement" className="form-control"
                                                           name="complment"
                                                           placeholder="Complemento" ref={register}/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="neighborhood" className="sr-only">Bairro</label>
                                                    <input type="text" id="neighborhood" className="form-control"
                                                           name="neighborhood"
                                                           placeholder="Bairro" required ref={register}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <label htmlFor="city" className="sr-only">Cidade</label>
                                                    <input type="text" id="city" className="form-control" name="city"
                                                           placeholder="Cidade" required ref={register}/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="state" className="sr-only">Estado</label>
                                                    <select className="form-control" id="state" name="estado"
                                                            required onChange={e => setValue("estado", e.target.value)}>
                                                        <option value="" disabled selected>Estado</option>
                                                        <option value="AC">Acre</option>
                                                        <option value="AL">Alagoas</option>
                                                        <option value="AP">Amapá</option>
                                                        <option value="AM">Amazonas</option>
                                                        <option value="BA">Bahia</option>
                                                        <option value="CE">Ceará</option>
                                                        <option value="DF">Distrito Federal</option>
                                                        <option value="ES">Espirito Santo</option>
                                                        <option value="GO">Goiás</option>
                                                        <option value="MA">Maranhão</option>
                                                        <option value="MT">Mato Grosso</option>
                                                        <option value="MS">Mato Grosso do Sul</option>
                                                        <option value="MG">Minas Gerais</option>
                                                        <option value="PA">Pará</option>
                                                        <option value="PB">Paraiba</option>
                                                        <option value="PR">Paraná</option>
                                                        <option value="PE">Pernambuco</option>
                                                        <option value="PI">Piauí</option>
                                                        <option value="RJ">Rio de Janeiro</option>
                                                        <option value="RN">Rio Grande do Norte</option>
                                                        <option value="RS">Rio Grande do Sul</option>
                                                        <option value="RO">Rondônia</option>
                                                        <option value="RR">Roraima</option>
                                                        <option value="SC">Santa Catarina</option>
                                                        <option value="SP">São Paulo</option>
                                                        <option value="SE">Sergipe</option>
                                                        <option value="TO">Tocantis</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="col-lg-6">
                                        <div className="payment-method">

                                            <h3>Formas de pagamento</h3>

                                            <div className="row">
                                                <div className="col-md-12">

                                                    <div className="row">
                                                        <div className="col-md-12 col-check">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                       name="PaymentMethod"
                                                                       id="card" value="credit_card" checked/>
                                                                    <label className="form-check-label" htmlFor="card">
                                                                        <img src={creditCard} alt="Cartão"
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


                                                    <fieldset disabled id="fieldsetCard" >

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

                                        <input id="btnSubmit" type="submit" className="btn btn-info" value="Finalizar"/>

                                    </div>
                                </div>
                    </form>


                </div>

            </section>
            {succes &&
                <Redirect to={`/planos/${plan.id}/success`}/>
            }

        </div>
    );
};