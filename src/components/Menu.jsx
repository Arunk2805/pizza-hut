import React from "react";
import img5 from "../assets/img5.jpg"

const Menu = () => {
  return (
    <div className="container-fluid my-4 py-4">

      <h3 className=" text-dark mx-5 px-4">Vegetarian Pizaa</h3>
      <div className="container my-3 py-3">
        
        <div className="card mb-3 card1" >
          <div className="row g-0">
            <div className="col-md-4 a1">
              <img src={img5} className="img-fluid rounded img6" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Deluxe Veggie Pizza</h5>
                <p className="card-text">
                The use of the freshest, top-quality ingredient makes deluxe veggie pizza tastier. From the chef-special pizza sauce to toppings, secret herbs to mozzarella cheese- everything used in this pizza makes a big difference in taste..  
                </p>
                <div className="">
                  <button className="btn btn-warning fw-medium mx-2 px-3 ">Order now </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>

        </div>
        
      </div>
    </div>
  );
};

export default Menu;
