import React from 'react';
import './CheckoutPro.css';
import { useStateValue } from '../StateProvider';
function CheckoutPro({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id, 
        })
    }
  return (
    <div className='checkoutpro' >
        <img className='checkoutpro_img' src={image}/>
        <div className="checkoutpro_info">
            <p className='checkoutpro_title'>{title}</p>
            <p className="checkoutpro_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutpro_rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutPro