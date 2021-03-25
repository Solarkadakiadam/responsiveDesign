import React from "react";
import classes from "./explore-item.module.css";
import Image from "next/image";

function ExploreItem(props) {
  const { product } = props;

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.infoBox}>
          <div className={classes.smallIcon}>
            <Image
              className={classes.image}
              src={product.image}
              alt={product.name}
              height={30}
              width={60}
              layout="responsive"
              // objectFit="cover"
              // objectPosition="center"
            />
            <div className={classes.priceContainer}>
              <div className={classes.price}>Each/{product.price}₺</div>
            </div>
          </div>
          <div style={{ width: "100", marginTop: "5px" }}>
            <h4 style={{ fontWeight: "lighter" }}>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        </div>
        <div className={classes.readMoreButton}>
          <h5>Read More</h5>
        </div>
      </div>
    </div>
  );
}

export default ExploreItem;
