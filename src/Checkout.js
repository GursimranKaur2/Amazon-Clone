import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                
                <img className="checkout__ad" 
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/Offerpage_1500x3001.jpg"
                alt=""
                />
                {basket?.length === 0 ? (
                <div>
                    <h3> Hello Guest</h3>
                    <h2>Your Shopping Basket is empty</h2>
                   
                </div>
             ) : (
                <div >
                    <h3> Hello {user?.email}</h3>
                    <h2 className="Checkout__title">
                        Your Shopping Basket contains: </h2>

                     {basket?.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
             )}
                
            </div>

             {basket.length >= 0 && (
                 <div className="checkout__right">
                  <Subtotal/>
                 </div>
              )}
          
        </div>
    );
}

export default Checkout;
