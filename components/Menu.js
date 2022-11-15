import React, { useContext, useEffect, useState } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "../public/images/close_icon.svg";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { languageContext } from "../pages/_app";
import LanguageFlag from "./LanguageFlag";
import Link from "next/link";
import { useTransition, animated } from "react-spring";
import { useRouter } from "next/router";
const content = require("../public/content/menu.json");
export default function Menu({ onExit, style, className, show }) {
  const [lang, setLang] = useContext(languageContext);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const transitions = useTransition(show, {
    from: { x: 800, opacity: 1 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 800, opacity: 1 },
    delay: 200,
  });

  const router = useRouter();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <>
      <div
        style={style}
        className={
          show
            ? "menu-container menu-container--active"
            : "menu-container menu-container--inactive"
        }
      >
        {transitions((styles, item) => {
          return (
            item && (
              <>
                <div onClick={onExit} className="escape-div"></div>
                <animated.div style={styles} className="menu">
                  <div className="close-icon">
                    <i onClick={onExit}>
                      <CloseIcon className="exit-popup-icon" />
                    </i>
                  </div>
                  <ul className="menu--ul">
                    <li
                      className={router.asPath === "/" ? "selected-page" : ""}
                    >
                      <Link onClick={onExit} href="/">
                        {content[lang].home}
                      </Link>
                    </li>

                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={
                          subMenuActive
                            ? "menu-chevron--active"
                            : "menu-chevron--inactive"
                        }
                        onClick={() => setSubMenuActive((prev) => !prev)}
                      >
                        {content[lang].contact}
                        <FontAwesomeIcon
                          style={{
                            marginLeft: "0.5rem",
                            marginRight: "-1.5rem",
                            fontSize: "1.5rem",
                          }}
                          icon={faChevronDown}
                        />
                      </a>
                      <ul
                        className={
                          subMenuActive
                            ? "sub-menu--active"
                            : "sub-menu--inactive"
                        }
                      >
                        <li
                          onClick={onExit}
                          className={
                            router.asPath === "/kontakt"
                              ? "selected-page sub-menu-link"
                              : "sub-menu-link"
                          }
                        >
                          <Link href="/kontakt">
                            {content[lang].sub_contact[0]}
                          </Link>
                        </li>
                        <li
                          onClick={onExit}
                          className={
                            router.asPath === "/gruppen"
                              ? "sub-menu-link selected-page"
                              : "sub-menu-link"
                          }
                        >
                          <Link href="/gruppen">
                            {content[lang].sub_contact[1]}
                          </Link>
                        </li>
                        <li
                          onClick={onExit}
                          className={
                            router.asPath === "/press-och-media"
                              ? "selected-page sub-menu-link"
                              : "sub-menu-link"
                          }
                        >
                          <Link onClick={onExit} href="/press-och-media">
                            {content[lang].sub_contact[2]}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        router.asPath === "/massan" ? "selected-page" : ""
                      }
                    >
                      <Link onClick={onExit} href="/massan">
                        {content[lang].fair}
                      </Link>
                    </li>
                    <li
                      className={
                        router.asPath === "/foretag" ? "selected-page" : ""
                      }
                    >
                      <Link onClick={onExit} href="/foretag">
                        {content[lang].companies}
                      </Link>
                    </li>
                    {/* <li
                      className={
                        router.asPath === "/jobbportalen" ? "selected-page" : ""
                      }
                    >
                      <Link onClick={onExit} href="/jobbportalen">
                        {content[lang].jobportal}
                      </Link>
                    </li> */}
                    {/* <li
                      className={
                        router.asPath === "/Bokning" ? "selected-page" : ""
                      }
                    >
                      <Link onClick={onExit} href="/booking">
                        {lang === "sv" ? "Boka" : "Booking"}
                      </Link>
                    </li>
                    <li
                      className={
                        router.asPath === "/Intresseanmälan"
                          ? "selected-page"
                          : ""
                      }
                    >
                      <Link onClick={onExit} href="/intresseanmalan">
                        {content[lang].register}
                      </Link>
                    </li> */}
                  </ul>
                  <div className="icons-menu">
                    <LanguageFlag />
                    <div className="icons-menu--links">
                      <a
                        href="https://www.facebook.com/medieteknikdagen"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                      >
                        <FontAwesomeIcon
                          className="brand-icons"
                          icon={faFacebook}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/medieteknikdagen/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                      >
                        <FontAwesomeIcon
                          className="brand-icons"
                          icon={faInstagram}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/medieteknikdagarna-2014/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                      >
                        <FontAwesomeIcon
                          className="brand-icons"
                          icon={faLinkedin}
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/c/Medieteknikdagen"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                      >
                        <FontAwesomeIcon
                          className="brand-icons"
                          icon={faYoutube}
                        />
                      </a>
                    </div>
                  </div>
                </animated.div>
              </>
            )
          );
        })}
      </div>
    </>
  );
}
