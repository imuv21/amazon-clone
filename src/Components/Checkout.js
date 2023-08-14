import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutPro from './CheckoutPro';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                       Your Shopping Basket
                    </h2>
                    {basket.map(( item ) => (
                        <CheckoutPro id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout