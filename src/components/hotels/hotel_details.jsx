import "./hotel.css";
import { useSelector } from "react-redux";
import { Navbar } from "../navbar/navbar";
import { InputBox } from "../inputBox/inputBox";
import { useState } from "react";

import { Link } from "react-router-dom";

import { Footer } from "../home/footer/Footer";

export const Hotel = () => {
  const details = useSelector((location_store) => location_store);

  const lc_data = details.location.payload;
  const hotel_data = details.details.payload;
  console.log(hotel_data);
  console.log(lc_data);

  const [search, setSearch] = useState(false);

  const changeSearch = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 170 && window.scrollY <= 300) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  window.addEventListener("scroll", changeSearch);

  return (
    <div className="hotels">
      <div className="hotels-fixed">
        <div className="top-fixed-comp-hotel">
          <Navbar />

          <div className="main-top">
            <div className="search-results">
              <InputBox></InputBox>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-contents">
        <div className="main-hotels-content">
          <div className="hotel-title-btn">
            <p>{lc_data.location.toUpperCase()}</p>
            <h3>{hotel_data.hotel_name.toUpperCase()}</h3>
          </div>

          <div className="hotel-imgs">
            <img src={hotel_data.hotel_img} alt="" className="bigImg" />
            <img src={hotel_data.img2} alt="" className="scndBig" />
            <img src={hotel_data.img3} alt="" className="first" />
            <img src={hotel_data.img4} alt="" className="second" />
            <img src={hotel_data.img5} alt="" className="third" />
          </div>

          <div className="hotel-menus">
            <div className="hotel-menus-list">
              <p>About</p>
              <p>Amenities</p>
              <p>Rate & Availability</p>
              <p>Host</p>
              <p>Rooms & beds</p>
              <p>Reviews</p>
              <p>Map</p>
              <p>Policies</p>
            </div>
          </div>

          <div className="full-details-about-hotel">
            <h2>About this rental</h2>

            <div className="bedrooms">
              <div>
                <h5>Cabin</h5>
                <p>1300 sq. ft</p>
              </div>
              <div>
                <h4>3 bedrooms</h4>
                <p>4 beds . Sleeps 8</p>
              </div>
              <div>
                <h4>2 bathrooms</h4>
                <p>2 full baths</p>
              </div>
              <div>
                <h4>Spaces</h4>
                <p>Kitchen . Deck/Patio . Lawn/Garden</p>
              </div>
            </div>

            <div className="description">
              <p>{hotel_data.des}</p>
            </div>

            <h2 className="title-amen">Amenities</h2>

            <div className="amenities">
              <p>
                <ion-icon name="logo-no-smoking"></ion-icon> No Smoking
              </p>
              <p>
                <ion-icon name="flame-outline"></ion-icon> Heater
              </p>
              <p>
                <ion-icon name="happy-outline"></ion-icon> Children Welcome
              </p>
              <p>
                <ion-icon name="tv-outline"></ion-icon> TV
              </p>
              <p>
                <ion-icon name="umbrella-outline"></ion-icon> Washer & Dryer
              </p>
              <p>
                <ion-icon name="rainy-outline"></ion-icon> Air Conditioning
              </p>
              <p>
                <ion-icon name="wifi-outline"></ion-icon> Internet
              </p>
              <p>
                <ion-icon name="git-compare-outline"></ion-icon> Parking
              </p>
              <p>
                <ion-icon name="bonfire-outline"></ion-icon> Fireplace
              </p>
            </div>
          </div>
        </div>

        {/* --------- */}
        <div className={search ? "right-details right-fixed" : "right-details"}>
          <div className="price-night">
            <h2>{hotel_data.price}</h2>
            <p>
              <ion-icon name="star-half-outline"></ion-icon>{" "}
              {hotel_data.ratings} (33 Reviews)
            </p>
          </div>
          <div className="check-details">
            <div className="tick">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>Your dates are available</p>
            </div>

            <div className="check-all-details">
              <div className="check-top">
                <div className="in">
                  <p>Check in</p>
                  <h4>{lc_data.checkin}</h4>
                </div>
                <div className="out">
                  <p>Check out</p>
                  <h4>{lc_data.checkout}</h4>
                </div>
              </div>
              <div className="check-bottom">
                <p>Guests</p>
                <h4>{lc_data.guest} guests</h4>
              </div>
            </div>

            <div className="total-price">
              <div className="main-total-price">
                <h4>Total</h4>
                <h4>${lc_data.guest * hotel_data.price_op}.00</h4>
              </div>
              <div className="main-total-tax">
                <p>Total includes fees not tax</p>
                <p>View Details</p>
              </div>
            </div>

            <p className="low-affirm">
              Or as low as $98/mo with Affirm. Learn more
            </p>
          </div>
          <div className="button-book">
            <button className="total-btn">
              <Link to="/payments">
                <p>Book now</p>
              </Link>
            </button>
          </div>
          <div className="contact">
            <p>Contact host</p>
          </div>
          <div className="property">
            <h4>Property # 1610167</h4>
            <p>Report this property</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
