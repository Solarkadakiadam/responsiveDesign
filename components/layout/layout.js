import { Fragment, useState } from "react";
import MainHeader from "./main-header";
import Footer from "./footer";
import DrawerMenu from "./drawer-menu";
import classes from "./layout.module.css";

function Layout(props) {
  const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);

  const setDrawerMenuVisibleHandler = () => {
    setDrawerMenuVisible((old) => !old);
  };
  return (
    <div className={classes.container}>
      <DrawerMenu
        setDrawerMenuVisible={setDrawerMenuVisibleHandler}
        drawerMenuVisible={drawerMenuVisible}
      />

      <MainHeader setDrawerMenuVisible={setDrawerMenuVisibleHandler} />

      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
