import "./MenuDisplay.css";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu } from "../Data/MenuData"; // Import the Menu interface from your data file

import { useEffect } from "react";
function MenuDisplay({ ItemData }: { ItemData: Menu[] }) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div className="dis" id="checkmenu" data-aos="zoom-in-right">
      <div className=" cont2">
        {ItemData.map((item) => {
          return (
            <Card
              image={item.image}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuDisplay;
