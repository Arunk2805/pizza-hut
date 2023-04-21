import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PizzaDescrp = () => {
  const { id } = useParams();
  const [pizzades, setPizzades] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    let data = await axios
      .get(`http://localhost:3031/pizzaHut/${id}`)
      .then((res) => {
        console.log(res.data);
        setPizzades(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };

  const ShowPizzaDescription = () => {
    return (
      <>
        <div className="col-md-4">
          <div className="">
            <img src={pizzades.image} alt="" className="img2" />
            <h3>{pizzades.title}</h3>
          </div>
        </div>
        <div className="col-md-8">extra details of Pizza</div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-3 py-3">
        <div className="row">
          {loading ? <Loading /> : <ShowPizzaDescription />}
        </div>
      </div>
    </div>
  );
};

export default PizzaDescrp;
