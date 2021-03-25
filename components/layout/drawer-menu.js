import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./drawer-menu.module.css";
import HomeIcon from "../icons/menu-icons/home-icon.js";
import DashboardIcon from "../icons/menu-icons/dashboard-icon";
import ContactIcon from "../icons/menu-icons/contact-icon";
import AboutIcon from "../icons/menu-icons/about-icon";
import ProductsIcon from "../icons/menu-icons/products-icon";
import MailIcon from "../icons/menu-icons/mail-icon";
import UsersIcon from "../icons/menu-icons/users-icons";
import SettingsIcon from "../icons/menu-icons/settings-icon";
import DrawerIcon from "../icons/drawer-icon";

function DrawerMenu(props) {
  const router = useRouter();
  const pathname = router.pathname;

  const dashboardIcon = (
    <DashboardIcon className={classes.icon} stroke="#c8cdd0" />
  );
  const homeIcon = <HomeIcon className={classes.icon} stroke="#c8cdd0" />;
  const productsIcon = (
    <ProductsIcon className={classes.icon} stroke="#c8cdd0" />
  );
  const contactIcon = <ContactIcon className={classes.icon} stroke="#c8cdd0" />;
  const aboutIcon = <AboutIcon className={classes.icon} stroke="#c8cdd0" />;
  const mailIcon = <MailIcon className={classes.icon} stroke="#c8cdd0" />;
  const usersIcon = <UsersIcon className={classes.icon} stroke="#c8cdd0" />;

  const activeLink = (icon, title, href) => (
    <Link href={href}>
      <a className={pathname === href ? classes.button_active : classes.button}>
        {icon}
        {title}
      </a>
    </Link>
  );

  if (props.drawerMenuVisible) {
    return (
      <div className={classes.mainContainer}>
        <div
          className={classes.shadowBackground}
          onClick={() => props.setDrawerMenuVisible()}
        />
        <div className={classes.leftMenu}>
          <nav>
            <div
              className={classes.drawerIcon}
              onClick={() => props.setDrawerMenuVisible()}
            >
              <DrawerIcon stroke="#c8cdd0" />
            </div>
            <ul>
              <li>{activeLink(dashboardIcon, "Ürünler", "/urunler")}</li>
              <li>{activeLink(aboutIcon, "Hakkımızda", "/hakkimizda")}</li>
              <li>{activeLink(contactIcon, "İletişim", "/contact")}</li>
              <li>{activeLink(mailIcon, "Mesajlar", "/messages")}</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  return null;
}

export default DrawerMenu;
