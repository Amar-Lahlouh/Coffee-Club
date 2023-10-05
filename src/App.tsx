import { useState } from "react";
import "./App.css";
import MenuData from "./Components/Data/MenuData";

import {
  Navbar,
  Home,
  About,
  Features,
  Category,
  MenuDisplay,
  More,
  Reservation,
  Testinomials,
  Footer,
} from "./Components/index";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // Initialize with "All"
  const AllCategories: string[] = [
    "All",
    ...(Array.from(new Set(MenuData.map((item) => item.category))) as string[]),
  ];

  const filterCategory = (cat: string) => {
    setSelectedCategory(cat); // Update the selected category
  };

  // Filter the items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? MenuData
      : MenuData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Category
        filterCategory={filterCategory}
        AllCategories={AllCategories}
        selectedCategory={selectedCategory} // Pass the selected category as a prop
      />
      <MenuDisplay ItemData={filteredItems} />
      <More />
      <Reservation />
      <Testinomials />
      <Footer />
    </>
  );
}

export default App;
