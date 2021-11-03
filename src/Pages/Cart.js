import React from "react";
import './Cart.css';
import '../Components/Navigation.css';

function Cart() {
  return (
    <div id="CartPage">
      <h1 className="CartPage_Title"> Shopping Cart</h1>
      <div className="container" id="CartPageContainer">
        <div className="row">
          <div className="col-md-4">
            One of two columns
          </div>
          <div className="col-md-8">
            One of two columns
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;