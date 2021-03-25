import Link from "next/link";
import classes from "./main-header.module.css";
import DrawerIcon from "../icons/drawer-icon";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const linkList = [
  { name: "Ürünler", href: "/urunler", type: "normal" },
  { name: "Hakkımızda", href: "/hakkimizda", type: "normal" },
  { name: "İletişim", href: "/iletisim", type: "normal" },
  { name: "Alışveriş", href: "/random", type: "round" },
];

function MainHeader(props) {
  const route = useRouter();

  const renderLinks = () => {
    return linkList.map((link) => (
      <Link key={link.name} href={link.href}>
        <li
          className={link.type === "round" ? classes.liRound : classes.liNormal}
        >
          {link.name}
        </li>
      </Link>
    ));
  };

  const [headerVisible, setHeaderVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    console.log(route.pathname, "path bu");

    window.onscroll = () => {
      if (route.pathname == "/") {
        if (
          window.pageYOffset >
          window.innerHeight - window.innerHeight * 0.12
        ) {
          setHeaderVisible(true);
        } else {
          setHeaderVisible(false);
        }
      }
    };
  }, [route]);

  useEffect(() => {
    if (route.pathname == "/") {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  }, [route]);

  console.log(headerVisible);

  return (
    <header className={headerVisible ? classes.bgHeader : classes.header}>
      <div className={classes.logo}>
        <Link href="/">Ad/Logo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.linksContainer}>{renderLinks()}</ul>
      </nav>
      <div
        className={classes.drawerIcon}
        onClick={() => props.setDrawerMenuVisible()}
      >
        <DrawerIcon stroke="#c8cdd0" />
      </div>
    </header>
  );
}

export default MainHeader;
