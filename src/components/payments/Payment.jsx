import "./payment.css";

import { Link, useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Payment-nav">
        <Link to="/">
          <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" />
        </Link>
        <div>Help</div>
      </div>

      <div className="Payment-text-center">
        <h2>Choose your payment method</h2>
      </div>
      <div className="Payment-box">
        <div className="Payment-left">
          <div>
            <h4>How would you like to pay</h4>
            <p>
              Safe secure transactions. Your personal information is protected.
            </p>
            <input type="radio" /> Pay over time
            <p>As low as $56/mo. Learn more</p>
            <hr />
            <div className="Credit-images">
              <div>
                <input type="radio" /> Credit Card
              </div>
              <img
                src="https://p.kindpng.com/picc/s/399-3995736_credit-card-payment-options-visa-mastercard-discover-logos.png"
                alt=""
              />
            </div>
            <div className="Payment-input-name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Card number" id="Card-number" />
            <div className="Payment-input-name">
              <input type="text" placeholder="Expiry" />
              <input type="text" placeholder="Security code" />
            </div>
            <p>Billing address</p>
            <div className="Payment-input-name">
              <input type="text" placeholder="Street" />
              <input type="text" placeholder="Country" />
            </div>
            <div className="Three-input-boxes">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Zip" />
              <input type="text" placeholder="State" />
            </div>
          </div>

          <div className="Refund-policy">
            <ion-icon name="refresh-outline"></ion-icon>
            Non-refundable for your trip dates
            <p>
              The host will have 24 hours to confirm your reservation or decline
            </p>
          </div>

          <div className="Payment-button-div">
            <div>
              <ion-icon name="chevron-back-outline"></ion-icon> Back
            </div>
            <button
              onClick={() => {
                alert("Payment Successfull");
                navigate("/");
              }}
            >
              {" "}
              Submit request
            </button>
          </div>
          <div className="Book-confidence">
            <span>
              <img
                src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.13.0/images/bwc/badge.svg"
                alt=""
                id="Protected-pay"
              />
            </span>
            <span>Book with confidence</span>
          </div>
        </div>

        <div className="Payment-right">
          <div className="Telephone-icon">
            <ion-icon name="call-outline" id="call-icon"></ion-icon>
            <div>
              <p>For booking assistance, call (1) 888-382-8909</p>
              <p>Rental Number : 1014657</p>
            </div>
          </div>

          <div>
            <h4>Luxury Apartment With Private Terrace</h4>
            <p>Mumbai, MH, IN </p>
          </div>

          <div className="Check-in-out">
            <div>
              <p>Check in</p>
              <p>Mar 11</p>
            </div>
            <div>
              <p>Check out</p>
              <p>Mar 16</p>
            </div>
          </div>
          <div className="Guests">
            <p>Guests</p>
            <p>4 Guests</p>
          </div>

          <div className="Service-charges">
            <p>$105.00 x 5 nights</p>
            <p>$525.00</p>
          </div>
          <div className="Service-charges">
            <p>Cleaning Fee</p>
            <p>$20.00</p>
          </div>
          <div className="Service-charges">
            <p>Service Fee</p>
            <p>$69.00</p>
          </div>
          <hr />
          <div className="Service-charges">
            <h4>Total </h4>
            <p>$614.00</p>
          </div>
          <hr />
          <p className="Offer-price">
            Or as low as $56/mo with Affirm. Learn more
          </p>

          <div className="Payment-protection">
            <h4>Payment Protection</h4>
            <p>Book and pay on Vrbo and get:</p>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span>Comprehensive Payment Protection</span>
            <br /> <br />
            <ion-icon name="checkmark-outline"></ion-icon>
            <span>Emergency Booking Assistance</span>
            <br /> <br />
            <ion-icon name="checkmark-outline"></ion-icon>
            <span>24hr Customer Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};
