import classes from "./footer.module.css";
import Link from "next/link";
import TwitterIcon from "../icons/social-media/twitter-icon";
import FacebookIcon from "../icons/social-media/facebook-icon";
import InstagramIcon from "../icons/social-media/instagram-icon";
import DownIcon from "../icons/down-icon";
import { useState, useEffect } from "react";

function Footer() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [windowWidth, setWindowWidth] = useState();

  const updateFieldChanged = (index) => {
    let newArr = [...visible];
    newArr[index] = !newArr[index];
    windowWidth > 465 ? null : setVisible(newArr);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (windowWidth > 465) {
      setVisible([true, true, true, true]);
    }
  }, [windowWidth]);

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.section}>
          <div
            onClick={() => updateFieldChanged(0)}
            className={classes.dropDown}
          >
            <h4>Şirket</h4>
            <div className={classes.icon}>
              <DownIcon />
            </div>
          </div>
          <ul style={visible[0] ? { display: "block" } : { display: "none" }}>
            <li>Mozilla Manifestosu</li>
            <li>Basın Merkezi</li>
            <li>Kurumsal Blog</li>
            <li>İş Olanakları</li>
            <li>İletişim</li>
            <li>Bağış</li>
          </ul>
        </div>
        <div className={classes.section}>
          <div
            onClick={() => updateFieldChanged(1)}
            className={classes.dropDown}
          >
            <h4>Kaynaklar</h4>
            <div className={classes.icon}>
              <DownIcon />
            </div>
          </div>
          <ul style={visible[1] ? { display: "block" } : { display: "none" }}>
            <li>Gizlilik Merkezi</li>
            <li>Tarayıcı Karşılaştırması</li>
            <li>Marka Standartları</li>
          </ul>
        </div>
        <div className={classes.section}>
          <div
            onClick={() => updateFieldChanged(2)}
            className={classes.dropDown}
          >
            <h4>Destek</h4>
            <div className={classes.icon}>
              <DownIcon />
            </div>
          </div>
          <ul style={visible[2] ? { display: "block" } : { display: "none" }}>
            <li>Ürün Yardımı</li>
            <li>Hata Bildirin</li>
          </ul>
        </div>

        <div className={classes.section}>
          <div
            onClick={() => updateFieldChanged(3)}
            className={classes.dropDown}
          >
            <h4>Geliştiriciler</h4>
            <div className={classes.icon}>
              <DownIcon />
            </div>
          </div>{" "}
          <ul style={visible[3] ? { display: "block" } : { display: "none" }}>
            <li>Developer Edition</li>
            <li>Beta</li>
            <li>Android için Beta</li>
            <li>Nightly</li>
            <li>Android için Nightly</li>
            <li>Enterprise Araçlar</li>
          </ul>
        </div>
        <div className={classes.section}>
          <div className={classes.subSection}>
            <h5>@Bizi Takip Edin</h5>
            <div className={classes.iconContainer}>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <TwitterIcon stroke="#c8cdd0" />
                </a>
              </Link>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <FacebookIcon stroke="#c8cdd0" />
                </a>
              </Link>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <InstagramIcon stroke="#c8cdd0" />
                </a>
              </Link>
            </div>
          </div>

          <div className={classes.subSection}>
            <h5>@Başkalarını Takip Edin</h5>
            <div className={classes.iconContainer}>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <TwitterIcon stroke="#c8cdd0" />
                </a>
              </Link>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <FacebookIcon stroke="#c8cdd0" />
                </a>
              </Link>
              <Link href="/admin">
                <a className={classes.socialLink}>
                  <InstagramIcon stroke="#c8cdd0" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.legalContainer}>
        <div></div>
        <a>Mozilla Corporation</a>’ın kâr amacı gütmeyen üst kuruluşu{" "}
        <a>Mozilla Vakfı</a>’ı ziyaret edin. Bu içeriğin bazı kısımları
        ©1998–2021 bireysel mozilla.org yazarları. İçerik, Creative Commons
        lisansı ile sunulmaktadır.
      </div>
    </footer>
  );
}

export default Footer;
