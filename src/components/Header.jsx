import React from "react";
import { FaCartPlus } from "react-icons/fa";



const Header = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="">
            <p className="word1 p1">
              Pizza<span id="word2">-Hut</span>
            </p>
          </div>
          <div className="cart">
            <p className="fs-4 p1 ">
              Cart <FaCartPlus />
            </p>
          </div>
        </div>
    
      </header>
    </div>
  );
};

export default Header;
