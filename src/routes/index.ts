import {RouteProps} from 'react-router-dom'
// @ts-ignore
import {SetupInicial} from "../pages/Setup";
import {Planos} from "../pages/Setup/planos";
import {PlanRegister} from "../pages/Setup/planRegister";
import {SubscribeSuccess} from "../pages/Setup/subscribeSuccess";
import {Company} from "../pages/Setup/company";
import {Checkout} from "../pages/Setup/checkout";

export interface MyRouteProps extends RouteProps{
    name : string,
    label: string
}

const routes: MyRouteProps[] = [
    {
        name: 'shop.index',
        label: 'Shop Commerce',
        path: '/',
        component: SetupInicial,
        exact: true
    },
    {
        name: 'shop.plans',
        label: 'Planos',
        path: '/planos',
        component: Planos,
        exact: true
    },
    {
        name: 'shop.register',
        label: 'Assinar',
        path: '/planos/:id',
        component: PlanRegister,
        exact: true
    },
    {
        name: 'shop.success',
        label: 'Sucesso',
        path: '/success/:id',
        component: SubscribeSuccess,
        exact: true
    },
    {
        name: 'shop.payment',
        label: "Empresa",
        path: 'company/:id',
        component: Company,
        exact:true
    },
    {
        name: 'shop.checkout',
        label: 'Checkout',
        path: '/planos/:id/checkout',
        component: Checkout,
        exact: true
    }



]

export default routes