import React from "react";
import img5 from "../assets/img5.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.webp";
import pizza6 from "../assets/pizza6.jpg";


const Menu = () => {

  return (
    <div className="container-fluid my-4 py-4 ">
      <div className="vegBox">
        <h3 className=" text-center text-decoration-underline mx-5 px-4">
          Vegetarian Pizaa
        </h3>
        <div className="container mt-3 pt-3">
          <div className="box1">
            <div className="card mb-4 card1 ">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={img5}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Deluxe Veggie Pizza</h5>
                    <p className="card-text">
                      The use of the freshest, top-quality ingredient makes
                      deluxe veggie pizza tastier. From the chef-special pizza
                      sauce to toppings, secret herbs to mozzarella cheese-
                      everything used in this pizza makes a big difference in
                      taste..
                    </p>
                    <div className="">
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4 card1">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={pizza2}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Cheese and Corn Pizza</h5>
                    <p className="card-text">
                      A combination of juicy Sweet Corn & 100% mozzarella cheese
                      with flavourful signature pan sauce.
                    </p>
                    <div className="">
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 card1">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={pizza3}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Paneer Tikka Pizza</h5>
                    <p className="card-text">
                      The marinated paneer cubes with diced onions and capsicum
                      is placed on pizza. once the paneer cubes are added, pizza
                      base is topped with generous amount of mozzarella cheese
                      and paneer pizza is ready.
                    </p>
                    <div className="">
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="NonVegBox">
        <h3 className="text-center text-decoration-underline my-3 py-3">Non-Vegetarian Pizza</h3>
        <div className="card mb-4 card1 ">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={pizza4}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Non-Veg Supreme Pizza</h5>
                    <p className="card-text">
                    Loaded with grilled chicken rashers, black olives, peri-peri chicken, grilled mushrooms, pepper BBQ chicken, and onions, this pizza is sure to create a flavor explosion in your mouth.
                    </p>
                    <div className="">
                     
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 card1 ">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={pizza5}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Chicken Tikka Pizza</h5>
                    <p className="card-text">
                    Loaded with grilled chicken rashers, black olives, peri-peri chicken, grilled mushrooms, pepper BBQ chicken, and onions, this pizza is sure to create a flavor explosion in your mouth.
                    </p>
                    <div className="">
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 card1 ">
              <div className="row g-0">
                <div className="col-md-4 a1">
                  <img
                    src={pizza6}
                    className="img-fluid rounded img6"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Pepper Barbecue Chicken Pizza</h5>
                    <p className="card-text">
                    The best item that would be the deepest cravings for non-vegetarian lovers would be the pepper barbecue chicken flavor. The aroma of the combination of the juicy chicken and the softness of the cheese along with the spice of the barbecue leaves the people drooling even before the boxes open.
                    </p>
                    <div className="">
                    <button className="btn btn-warning fw-medium mx-2 px-3 "type="button">Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Menu;
