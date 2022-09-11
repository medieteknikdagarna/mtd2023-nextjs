import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import Button from "../components/Button";
import AboutInfo from "../components/AboutInfo";
import { languageContext } from "./_app";
import Footer from "../components/Footer";
import { useContext } from "react";
import TheFair from "../components/TheFair";
import ResponsiveContainer from "../components/ResponsiveContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";
const content = require("../public/content/fair.json");
import { NextSeo } from "next-seo";
import EmbeddedVideo from "../components/AfterMovie";
export function importAll(r) {
  let images = [];
  if (!r) {
    return;
  }
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function About() {
  const [lang, setLang] = useContext(languageContext);

  return (
    <div className="fair-background">
      <NextSeo
        title="Mässan"
        description="Säkra din plats på mediteteknikstudenternas årliga arbetsmarknadsdag Medieteknikdagen! Få chansen att träffa hundratals civilingenjörsstudenter och exponera erat företag."
        canonical="https://www.medieteknikdagen.se/massan"
      />
      <Header changeOnScroll />
      {(!content && <LoadingSpinner />) || (
        <>
          <div className="about-page">
            {/* <ResponsiveContainer className="about-page--first-section">
                                <div className="about-section">
                                    <div className="about-section--message">
                                        <h1>{content && content[lang].title}</h1>
                                        <p>{content && content[lang].ingress}</p>
                                        <Button href="/kontakt" type="primary">{lang === "sv" ? "Kontakta oss" : "Contact us"}</Button>
                                    </div>
                                </div>
                            </ResponsiveContainer> */}

            <ResponsiveContainer>
              <TheFair />
              {/* <div className="gl-video">
                <EmbeddedVideo
                  src={"https://www.youtube.com/embed/AYt-2L9gOpo"}
                />
              </div> */}
            </ResponsiveContainer>

            <ResponsiveContainer className="fair-responsive">
              <AboutInfo />
            </ResponsiveContainer>

            <ResponsiveContainer>
              <Gallery />
            </ResponsiveContainer>

            <ResponsiveContainer className="fair-container--lecturers">
              <div className="fair-container--lecturers--div">
                <InfoSection
                  tag={lang === "sv" ? "Tidigare år" : "Previous years"}
                  title={content[lang].lecturer.title}
                  body={content[lang].lecturer.body}
                />
              </div>
              <Carousel />
            </ResponsiveContainer>
          </div>

          <Footer style={{ marginTop: 0 }} />
        </>
      )}
    </div>
  );
}
