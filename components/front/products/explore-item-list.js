import React from "react";
import ExploreItem from "./explore-item";
import classes from "./explore-item-list.module.css";

function ExploreItemList(props) {
  const { products } = props;

  return (
    <div className={classes.container}>
      {products ? (
        products.map((product) => (
          <ExploreItem key={product.id} product={product} />
        ))
      ) : (
        <div>
          <p>Loading</p>
        </div>
      )}
    </div>
  );
}

export default ExploreItemList;
