import { useEffect, useState } from "react";

import axios from "axios";

import { InputBox } from "../inputBox/inputBox";
import { Navbar } from "../navbar/navbar";
import "./results.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetails } from "../location_redux/actions";
import { Link } from "react-router-dom";
import { Footer } from "../home/footer/Footer";

export const Results = () => {
  let keyMap = "AIzaSyCmNx0FqAPkI9rcXbzErEMQAh4bMkQwn1E";

  const { payload } = useSelector((location_store) => location_store.location);

  const lc_name = payload.location;
  const [mainData, setMainData] = useState([]);
  const [page, setPage] = useState(false);

  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get(
        `https://vrbo-hotel-api.herokuapp.com/hotels?_page=${page}&_limit1=10`
      )
      .then((res) => setMainData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(mainData);

  return (
    <div>
      <div className="fixed-comp">
        <div className="top-fixed-comp">
          <div className="banner-results">
            <p>
              Know before you go COVID-19 travel restrictions, including testing
              and quarantine, are changing rapidly.Check restrictions
            </p>
          </div>

          <Navbar />

          <div className="main-top">
            <div className="search-results">
              <InputBox className="half-input"></InputBox>
            </div>

            <div className="filters">
              <div className="filters-main">
                <ion-icon name="filter-circle-outline"></ion-icon>
                <p>Filters</p>
              </div>
              <div className="popular-main">
                <p>Popular</p>
              </div>
              <div className="price-main">
                <p>Price</p>
              </div>
              <div className="rooms-main">
                <p>Rooms & spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="show-results">
        <div className="main-results-list">
          <div className="top-list-location">
            <p className="location">{lc_name.toUpperCase()}</p>

            <div className="no-list-sort">
              <p>{mainData.length} properties</p>

              <div className="sort-list">
                <p>Sort</p>
              </div>
            </div>
          </div>

          <div className="data-mapped">
            {mainData.map((e) => {
              return (
                <div key={e.id} className="list-is-here">
                  <div className="img-div-list">
                    <img src={e.hotel_img} alt="" />
                  </div>
                  <div className="details-div-list">
                    <div className="title-list">
                      <p>{lc_name.toUpperCase()}</p>

                      <Link
                        to="/hotel-detail"
                        className="hotel_name"
                        onClick={() => {
                          dispatch(getDetails(e));
                        }}
                      >
                        {e.hotel_name}
                      </Link>
                    </div>

                    <div className="night-price">
                      <p>
                        <ion-icon name="star-half-outline"></ion-icon>
                        {e.ratings}
                      </p>

                      <h3>{e.price}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Footer />
        </div>
        <div className="main-results-map">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${keyMap}
      &q=${lc_name}`}
            frameborder=""
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
