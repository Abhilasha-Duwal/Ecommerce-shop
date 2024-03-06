import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((collection, index) => {
          return (
            <Item
              key={index}
              id={collection.id}
              name={collection.name}
              image={collection.image}
              new_price={collection.new_price}
              old_price={collection.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
