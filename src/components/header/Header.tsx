import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import CartBlock from "../cart-block/CartBlock";

const Header = () => {
    return (
        <div className={'header'}>
           <div className={'wrapper'}>
               <Link className={'header__store-title'} to={'/'}>
                   Game Store
               </Link>
           </div>
            <div className={'wrapper header__cart-btn-wrapper'}>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;
