import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const PizzaList = () => {
  const [pizzainfo, setPizzaInfo] = useState([]);

  const [loading, setLoading] = useState(false);
  const getDatafromServer = async () => {
    let getData = await axios
      .get("http://localhost:3031/pizzaHut")
      .then((res) => {
        console.log(res.data);
        setPizzaInfo(res.data);
      });
  };
  useEffect(() => {
    getDatafromServer();
  }, []);

  const Loading = () => {
    return <>Loading ....</>;
  };

  const ShowDetails = () => {
    return (
      <>
        {pizzainfo.map((pizza) => {
          if (pizza.category === "VegetarianPizza") {
            return (
              <div className="col-md-4" key={pizza.id}>
                <div className="card card1">
                  <img src={pizza.image} className="card-img-top img1" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pizza.title}</h5>
                    <p className="card-text">
                      {pizza.description}
                    </p>
                    <Link to={`/pizzades/${pizza.id}`} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
         
        })}
      </>
    );
  };
  const NonVegDetails = ()=>{
    return<>
    {pizzainfo.map((pizza) => {
          if (pizza.category == "NonVegetarianPizza") {
            return (
              <div className="col-md-4 pb-5" key={pizza.id}>
                <div className="card card1">
                  <img src={pizza.image} className="card-img-top img1" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pizza.title}</h5>
                    <p className="card-text">
                      {pizza.description}
                    </p>
                    <Link to={`/pizzades/${pizza.id}`} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
         
        })}
    </>
  }

  return (
    <div className="box1">
    <div className="container mt-5 py-5 ">
      <div className="row pb-3">
        <h3 className=" text-decoration-underline">
          Vegtarain Pizza{" "}
        </h3>
      </div>
      <div className="row">{loading ? <Loading /> : <ShowDetails />}</div>
    </div>

    <div className="container mt-3 ">
      <div className="row mb-3">
        <h3 className=" text-decoration-underline">
           Non Vegtarain Pizza{" "}
        </h3>
      </div>
      <div className="row my-3">{loading ? <Loading /> : <NonVegDetails />}</div>
    </div>

    </div>
  );
};

export default PizzaList;
