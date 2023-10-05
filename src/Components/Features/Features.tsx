import "./Features.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import featuresData from "../Data/featuresData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Features() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  const FeatureCardItem = featuresData.map((item) => {
    return (
      <FeatureCard
        image={item.image}
        desc={item.desc}
        title={item.title}
        id={item.id}
      />
    );
  });
  return (
    <div>
      <section className="features" id="features" data-aos="zoom-in-right">
        <div className="feature-header">
          <h2>Features</h2>
          <h1>Our Best Features</h1>
        </div>
        <div className="Items">{FeatureCardItem}</div>
      </section>
    </div>
  );
}

export default Features;
