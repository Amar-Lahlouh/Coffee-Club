import { Feature } from "../Data/featuresData";
import "./FeatureCard.css";

function FeatureCard(props: Feature) {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={props.image} alt="" className="feature-image" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>

          <div className="text">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
