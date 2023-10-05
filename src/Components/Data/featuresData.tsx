import Contact from "../../assets/contact.png";
import delivery from "../../assets/delievery.png";

import cal from "../../assets/cal.png";
import bell from "../../assets/bell.png";

export interface Feature {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  desc: string;
}
export const Features: Feature[] = [
  {
    id: 1,
    image: Contact,
    title: "Contact Us",
    desc: "Reach out to us for any inquiries or feedback via our easy-to-use contact form, phone, or email.",
  },
  {
    id: 2,
    image: delivery,
    title: "Fast Delivery",
    desc: "For the times, you can't make it to our shop, we ensure fast delivery of your favorite coffee.",
  },
  {
    id: 3,
    image: cal,
    title: "Event Calendar",
    desc: "We habe events like music concerts and dance performances at our coffee shop. Really Great Shop you have to try",
  },
  {
    id: 4,
    image: bell,
    title: "Subscription Discount",
    desc: "Subscribe to our service and enjoy a special discount on your orders.You will absolutely love it!  ",
  },
];
export default Features;
