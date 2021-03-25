import React from "react";
import Image from "next/image";
import classes from "./big-image-text-card.module.css";

function BigImageTextCard(props) {
  const renderPosition = () => {
    if (props.position === "right") {
      return (
        <div className={classes.container}>
          <p>{props.text}</p>

          <div className={classes.imageContainer}>
            <div className={classes.imgWrapper}>
              <Image
                src={props.image}
                alt="selam"
                height={34}
                width={60}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      );
    }
    if (props.position === "left") {
      return (
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.imgWrapper}>
              <Image
                src={props.image}
                alt="selam"
                height={38}
                width={60}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                loading="eager"
              />
            </div>
          </div>

          <p>{props.text}</p>
        </div>
      );
    }
  };

  return <div>{renderPosition()}</div>;
}

export default BigImageTextCard;
