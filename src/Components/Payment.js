import React  from 'react';
import "./Payment.css";
import { useStateValue } from '../StateProvider';
import CheckoutPro from './CheckoutPro';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                   Checkout (<Link style={{textDecoration: "none"}} to ="/checkout"> {basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>190, sbla bla</p>
                        <p>New York, US</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                    {basket.map(( item ) => (
                        <CheckoutPro id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                       <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment