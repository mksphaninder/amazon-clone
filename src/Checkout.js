import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal.js";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.amazon.com/images/G/01/VANS/Q32020/Unboxing/AShop27_Unboxing_SmartPlug2020_ILM_DetailPage_aShop_Unboxing_Desktop_1x_2_3._CB409179642_.png"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div className="">
            <h2>Your shipping basket is empty</h2>
            <p>
              You do not have items in your basket. To buy one or more items
              click "Add to basket" next ot the item.
            </p>
          </div>
        ) : (
          <div className="">
            <h2 className="checkout__title">Your Shopping Basket:</h2>
            {basket?.map((item) => (
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
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
