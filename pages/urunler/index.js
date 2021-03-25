import classes from "./products.module.css";
import { getAllProducts } from "../../lib/products-util.js";
import ExploreItemList from "../../components/front/products/explore-item-list";
import Head from "next/head";

function Products(props) {
  const { products } = props;

  return (
    <div className={classes.container}>
      <Head>
        <title>Ürünler</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.subContainer}>
        <div className={classes.thirdContainer}>
          <h1>Ürünler</h1>
          <ExploreItemList products={products} />
        </div>
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

export default Products;
