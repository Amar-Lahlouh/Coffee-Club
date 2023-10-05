import es from "../../assets/es.jpg";
import Espresso from "../../assets/espresso.jpg";

import CafeLatte from "../../assets/latte.jpg";
import Machiato from "../../assets/machiato.jpg";
import Hotchoco from "../../assets/hotchoco.jpg";
import Tea from "../../assets/tea.jpg";

import carrotcake from "../../assets/carrotcake.jpg";
import am from "../../assets/am.jpg";
import cheesecake from "../../assets/cheesecake.jpg";
import lemonPie from "../../assets/lemonpie.jpg";
import frappe from "../../assets/Frappe-Coffee.jpg";
import smoothie from "../../assets/smoothie.jpg";
import cookies2 from "../../assets/cookies2.jpg";
import criossant2 from "../../assets/croissant.jpg";
import bread from "../../assets/bread.jpg";
export interface Menu {
  id?: number;
  name: string;
  description: string;
  price: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  category?: string;
}
const MenuData: Menu[] = [
  {
    id: 1,
    name: "Americano",
    description:
      "An Americano is a diluted espresso, known for its rich, mellow taste.",
    price: 10,
    category: "Hot",
    image: am,
  },
  {
    id: 2,
    name: "Espresso",
    description:
      "A bold, concentrated coffee brewed by forcing hot water through finely-ground beans",
    price: 15,
    category: "Hot",
    image: es,
  },
  {
    id: 3,
    name: "Cappucino",
    description:
      " Contains Espresso, equal parts steamed milk, and velvety froth, creating a layered coffee indulgence",
    price: 20,
    category: "Hot",
    image: Espresso,
  },
  {
    id: 4,
    name: "Cafe Latte",
    description:
      "Contains Espresso with steamed milk, delivering a smooth, creamy coffee delight",
    price: 25,
    category: "Hot",
    image: CafeLatte,
  },
  {
    id: 5,
    name: "Latte Machiato",
    description:
      " Steamed milk 'stained' with espresso, offering a layered and visually appealing coffee experience",
    price: 15,
    category: "Hot",
    image: Machiato,
  },
  {
    id: 6,
    name: "Hot Chocolate",
    description:
      " A comforting and velvety cocoa beverage, perfect for warming up on chilly days.",
    price: 10,
    category: "Hot",
    image: Hotchoco,
  },
  {
    id: 7,
    name: "Hot Tea",
    description:
      " A soothing and aromatic infusion of tea leaves in hot water, offering diverse flavors and relaxation.",
    price: 20,
    category: "Hot",
    image: Tea,
  },

  {
    id: 9,
    name: "Croissant Chocolate",
    description:
      " A delectable pastry with buttery layers, encasing a luscious chocolate filling",
    price: 10,
    category: "Bakery",
    image: criossant2,
  },
  {
    id: 10,
    name: "Chocolate Bread",
    description:
      " A delicious fusion of rich cocoa and soft, fluffy bread, perfect for a sweet treat.",
    price: 30,
    category: "Bakery",
    image: bread,
  },
  {
    id: 11,
    name: "Carrot Cake",
    description:
      " A moist and spiced dessert featuring grated carrots, topped with creamy, tangy frosting.",
    price: 35,
    category: "Bakery",
    image: carrotcake,
  },
  {
    id: 12,
    name: "Cookies",
    description:
      "Bite-sized delights, baked to perfection, with a variety of flavors to satisfy your sweet cravings ",
    price: 25,
    category: "Bakery",
    image: cookies2,
  },
  {
    id: 13,
    name: "Cheesecake",
    description:
      "A velvety and indulgent dessert, blending cream cheese and a crumbly crust for a creamy delight",
    price: 50,
    category: "Bakery",
    image: cheesecake,
  },
  {
    id: 14,
    name: "Lemon Pie",
    description:
      "Lemon Pie: A zesty, tangy dessert with a flaky crust, combining the brightness of lemon with a sweet filling.",
    price: 30,
    category: "Bakery",
    image: lemonPie,
  },
  {
    id: 15,
    name: "Frappe Coffee",
    description:
      " A zesty, tangy dessert with a flaky crust, combining the brightness of lemon with a sweet filling.",
    price: 25,
    image: frappe,
    category: "Gold",
  },
  {
    id: 16,
    name: "Smoothie",
    description:
      " A refreshing blend of fruits, yogurt, and/or juice, providing a healthy and tasty drink option",
    price: 25,
    category: "Gold",
    image: smoothie,
  },
];
export default MenuData;
