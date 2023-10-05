import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";
import test3 from "../../assets/test3.jpg";
import test4 from "../../assets/test4.jpg";
import test5 from "../../assets/test5.jpg";
import test6 from "../../assets/test6.jpg";
export interface Tests {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  id: number;
  name: string;
  description: string;
}
const TestinomialsData: Tests[] = [
  {
    id: 1,
    image: test1,
    name: "Sara Ahmad",
    description:
      "The cappuccino was a creamy delight, a perfect way to start the day so Happy!.Try it",
  },
  {
    id: 2,
    image: test2,
    name: "Youmy Salem",
    description:
      "Your americanos impress with their balanced flavors and smoothness.",
  },

  {
    id: 3,
    image: test3,
    name: "Mariam Ahmad",
    description:
      "The espresso shots are remarkable, capturing the essence of Italian coffee .",
  },
  {
    id: 4,
    image: test4,
    name: "Najla Hijazi",
    description:
      "The cappuccino not only looked beautiful with latte art but also tasted divine.",
  },

  {
    id: 5,
    image: test5,
    name: " Aisha Haddad",
    description:
      "Your coffee consistently maintains its high quality, a testament to your dedication.",
  },

  {
    id: 6,
    image: test6,
    name: "Lara Sulieman",
    description:
      "Your coffee shop offers a cozy atmosphere and friendly staff Recommended!",
  },
];

export default TestinomialsData;
