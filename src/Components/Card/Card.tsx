import "./Card.css";
import { Menu } from "../Data/MenuData";

function Card(props: Menu) {
  return (
    <div className="Cards-Menu1">
      <div className="cardmenu">
        <div className="firstpart">
          <img src={props.image} alt="" className="plate" /> <br />
          <h2>{props.name}</h2>
        </div>
        <div className="secondpart">
          <p>{props.description}</p>
          <br />
          <p className="price"> {props.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
