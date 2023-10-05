import "./More.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import img111 from "../../assets/img111.jpg";
import img2 from "../../assets/img2.jpg";
import img33 from "../../assets/img33.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
function More() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="gallery" id="gallery">
        <div className="top">
          <h2>Our Gallery</h2>
          <h3>Check Out Some Photos!</h3>
        </div>
        <div className="photos">
          <img src={img111} alt="" data-aos="zoom-in-right" />
          <img src={img2} alt="" data-aos="zoom-in-right" />
          <img src={img33} alt="" data-aos="zoom-in-right" />
          <img src={img4} alt="" data-aos="zoom-in-right" />
          <img src={img5} alt="" data-aos="zoom-in-right" />
          <img src={img6} alt="" data-aos="zoom-in-right" />
        </div>
      </div>
    </div>
  );
}

export default More;
