import "./reservation.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
function Reservation() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div className="res" data-aos="zoom-in-right" id="Book">
      <div className="reservation container">
        <div className="top">
          <h1>Reservation</h1>
          <h2>Book A Table</h2>
        </div>
        <form className="reservation-grid">
          <div className="input-div">
            <input
              type="text "
              placeholder="Your Name"
              className="form-input"
            />
          </div>
          <div className="input-div">
            <input
              type="email"
              placeholder="Your Email Address"
              className="form-input"
            />
          </div>
          <div className="input-div">
            <input
              type="text"
              placeholder="Your Phone"
              className="form-input"
            />
          </div>
          <div className="input-div">
            <input type="text" placeholder="Date " className="form-input" />
          </div>
          <div className="input-div">
            <input type="text" placeholder="Time" className="form-input" />
          </div>
          <div className="input-div">
            <input
              type="text"
              placeholder="Number of People"
              className="form-input"
            />
          </div>
          <div className="input-div input--textarea">
            <textarea
              className="form-input"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="btn btn-flex res-btn">Book A Table</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
