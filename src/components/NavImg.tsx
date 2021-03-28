// @flow
import * as React from 'react';
import logo from '../assets/images/logo-nav.png'

type Props = {

};
export const NavImg = (props: Props) => {
    return (
        <div className="nav-code-shop">
            <div className="container">

                <img src={logo} alt="Logomarca CodeShop"/>

            </div>
        </div>
    );
};