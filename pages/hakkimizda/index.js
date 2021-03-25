import classes from "./about.module.css";
import Head from "next/head";
import BigImageTextCard from "../../components/front/textImageCard/big-image-text-card";
import longText from "./longText";

function Urunler(props) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Hakkımızda</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.subContainer}>
        <div className={classes.thirdContainer}>
          <h1>Hakkımızda</h1>
          <BigImageTextCard
            position="right"
            text={longText}
            image={"/images/bg4.png"}
          />
          <BigImageTextCard
            position="left"
            text={longText}
            image={"/images/bg4.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Urunler;
