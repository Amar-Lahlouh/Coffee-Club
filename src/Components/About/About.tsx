import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import about from "../../assets/about4.jpg";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="top">
        <h1>About Us</h1>
      </div>
      <section className="about " id="about">
        <div className="image-about">
          <img
            src={about}
            alt=""
            className="About-img"
            data-aos="fade-down-right"
          />
        </div>
        <div className="content" data-aos="fade-down-left">
          <h3>Best Quality of ingredients.Get a Coffee for you!</h3>

          <p>
            We're your cozy corner for exceptional coffee. From carefully
            sourced beans to expertly crafted brews, we're passionate about
            every sip. Join us in our inviting space to savor not only great
            coffee but also delightful pastries and a warm ambiance. Your daily
            escape starts here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
