import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import "./Category.css";
interface CategoryProps {
  AllCategories: string[];
  filterCategory: (cat: string) => void;
  selectedCategory: string;
}
function Category({ AllCategories, filterCategory }: CategoryProps) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div
        className="category"
        id="category"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="top">
          <h2>Our Menu</h2>
          <h3>Check Out Our Delicious Coffee</h3>
        </div>
        <div className="buttons">
          {AllCategories.length >= 1 ? (
            AllCategories.map((cat: string) => (
              <button
                className="cat-btn"
                key={cat}
                onClick={() => filterCategory(cat)}
                value={cat}
              >
                {cat}
              </button>
            ))
          ) : (
            <h2>No Category</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
