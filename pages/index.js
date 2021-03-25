import classes from "./landing-page.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllProducts } from "../lib/products-util.js";
import ExploreItemList from "../components/front/products/explore-item-list";
import Head from "next/head";

function Main(props) {
  const [width, setWidth] = useState();

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);

  const { products } = props;

  console.log(props);

  return (
    <div className={classes.container}>
      <Head>
        <title>Lorem Ipsum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.subContainer}>
        <div className={classes.bgImageContainer}>
          <Image
            src="/images/bg4.png"
            alt="selam"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="eager"
          />
        </div>

        <div className={classes.landingText}>
          <h1>Lorem ipsum dolor sit amet,</h1>
          <h1>Consectetur adipiscing elit.</h1>
          <div className={classes.smallTextContainer}>
            <h4>
              Cras facilisis auctor odio, et tincidunt nulla bibendum vel.
            </h4>
            <h4>eleifend et lacus vulputate.</h4>
          </div>
          <div className={classes.landingButtonContainer}>
            <div className={classes.landingButton}>Lorem</div>
          </div>
        </div>
      </div>
      <div className={classes.secondContainer}>
        <div className={classes.infoBox}>
          <div className={classes.smallIcon}>
            <Image
              src="/images/ticket.png"
              alt="selam"
              height={40}
              width={40}
              layout="responsive"
              // objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div>
            <h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
              Tickets
            </h4>
            <h6>
              Etiam fermentum orci ut lacus sollicitudin, vitae lobortis sem
              auctor.
            </h6>
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.smallIcon}>
            <Image
              src="/images/fishing.png"
              alt="selam"
              height={40}
              width={40}
              layout="responsive"
              // objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div>
            <h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
              Fishing
            </h4>
            <h6>
              Etiam fermentum orci ut lacus sollicitudin, vitae lobortis sem
              auctor.
            </h6>
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.smallIcon}>
            <Image
              src="/images/smallForm.png"
              alt="selam"
              height={40}
              width={40}
              layout="responsive"
              // objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div>
            <h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
              Paperwork
            </h4>
            <h6>
              Etiam fermentum orci ut lacus sollicitudin, vitae lobortis sem
              auctor.
            </h6>
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.smallIcon}>
            <Image
              src="/images/bonfire.png"
              alt="selam"
              height={40}
              width={40}
              layout="responsive"
              // objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div>
            <h4 style={{ fontWeight: "lighter", marginBottom: "5px" }}>
              Bonfire
            </h4>
            <h6>
              Etiam fermentum orci ut lacus sollicitudin, vitae lobortis sem
              auctor.
            </h6>
          </div>
        </div>
      </div>
      <div className={classes.thirdContainer}>
        <h1>Different Activities</h1>
        <ExploreItemList products={products} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default Main;
