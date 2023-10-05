import "./Home.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="home" className="home">
      <div className="home-container container">
        <div className="home-content" data-aos="fade-right">
          <span className="subtitle">Welcome to Our CoffeShop!</span>
          <h1 className="title">Start Your Day With a Cup of Coffee</h1>
          <p className="description">
            Coffee Shop is the best place for you to get your coffee and enjoy
            it with friends, family or colleagues.
          </p>
          <div className="home-btns">
            <a href="#checkmenu" className="btn">
              Check Menu
            </a>
            <a href="#Book" className="btn">
              Book a table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
