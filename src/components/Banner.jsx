import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import Menu from './Menu';

const Banner = () => {
  return (
    <div>
      <div className="container my-2">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100 active" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100 img4" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100 img4" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <Menu/>
    </div>
  )
}

export default Banner
