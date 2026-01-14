import React from "react";
import {PLANT_DATA} from "../data/plantData";
import ProductCard from "../components/ProductCard";

const ProductListingPage = () => {
  // Get all unique categories from the data
  const categories = [...new Set(PLANT_DATA.map(plant => plant.category))];

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <section
          key={category}
          className="product-category"
        >
          <h3>{category}</h3>
          <div className="product-grid">
            {PLANT_DATA.filter(plant => plant.category === category).map(
              plant => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                />
              )
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListingPage;
