import React, { useContext } from "react";
import MTDSvg from "../public/images/mtd_white.svg";
import MTSvg from "../public/images/mt_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { ClipboardButton } from "./ContactCard";
import Link from "next/dist/client/link";
import { languageContext } from "../pages/_app";
const content = require("../public/content/footer.json");

export default function Footer(props) {
  const [lang, setLang] = useContext(languageContext);

  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div>
            <div className="footer--images">
              <MTDSvg />
              <MTSvg />
            </div>
            <div className="footer--icons">
              <a
                href="https://www.facebook.com/medieteknikdagen"
                target="_blank"
                rel="noreferrer"
                className="footer--icon-link"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.5rem" }}
                  className="brand-icons"
                  icon={faFacebook}
                />
              </a>
              <a
                href="https://www.instagram.com/medieteknikdagen/"
                target="_blank"
                rel="noreferrer"
                className="footer--icon-link"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.5rem" }}
                  className="brand-icons"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/medieteknikdagarna-2014/"
                target="_blank"
                rel="noreferrer"
                className="footer--icon-link"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.5rem" }}
                  className="brand-icons"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="https://www.youtube.com/c/Medieteknikdagen"
                target="_blank"
                rel="noreferrer"
                className="footer--icon-link"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.5rem" }}
                  className="brand-icons"
                  icon={faYoutube}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div>
            <h4>Open Source</h4>
            <p>{content[lang].opensource.body}</p>
            <a
              href="https://github.com/medieteknikdagarna/mtd2023-nextjs"
              target="_blank"
              rel="noreferrer"
            >
              <div className="github-button">
                <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <h4>{lang === "sv" ? "Kontakt" : "Contact"}</h4>
            <ClipboardButton
              fontColor="var(--color-light)"
              textToCopy={"info@medieteknikdagen.se"}
            />
            <h4>GDPR</h4>
            <p>
              {content[lang].gdpr.body}
              <Link href="/policy">
                <a>{lang === "sv" ? "integritetspolicy" : "privacy policy"}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer--bar">
        <code>{content[lang].tag}</code>
      </div>
    </>
  );
}
