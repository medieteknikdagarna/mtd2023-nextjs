import React, { useEffect, useState, useContext } from "react";
import { shuffleArray } from "../pages/foretag";
const content = require("../public/content/company_information.json");
import CompanyModal from "./CompanyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languageContext } from "../pages/_app";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function CompanyInformationCard({
  company,
  showText = true,
  clickable = true,
}) {
  const [lang, setLang] = useContext(languageContext);
  const [isOpen, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const handleOpenModal = () => {
    if (clickable) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const MAX_CHAR_LENGTH = 360;
    let newInfo = [];
    let sum = 0;
    if (clickable && company.partner == "huvudsponsor") {
      for (let i = 0; i < company.information.length; i++) {
        if (sum > MAX_CHAR_LENGTH) {
          break;
        }
        if (company.information[i].length + sum > MAX_CHAR_LENGTH) {
          let st =
            company.information[i].slice(0, MAX_CHAR_LENGTH - sum - 1) + " ...";
          newInfo.push(st);
          break;
        } else {
          newInfo.push(company.information[i]);
          sum += company.information[i].length;
        }
      }
    } else {
      newInfo = company.information;
    }

    setInfo(newInfo);
  }, [company]);

  // Hover effect animation //
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  for (const card of document.querySelectorAll(".company-information-card")) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }
  // Hover effect animation //

  return (
    <>
      {isOpen && (
        <CompanyModal closeFunction={() => setOpen(false)} company={company} />
      )}
      <div onClick={handleOpenModal} className={"company-information-card"}>
        <div
          className={
            "company-information-card--right background-image-" +
            company.partner
          }
        >
          <img src={"images/companies/all/" + company.logo} />
        </div>
        <div className="company-information-card--left">
          <h5>{company.company.toUpperCase()}</h5>
          <span className={"company-information-card--" + company.partner}>
            {company.partner.toUpperCase()}
          </span>
          <div className="company-information-card--information">
            {showText &&
              info &&
              info.map((line, i) => {
                return <p key={i.toString()}>{line}</p>;
              })}

            {clickable && (
              <span className="read-more-company">
                {lang == "sv" ? "Läs mer" : "Read more"}
              </span>
            )}
          </div>
        </div>
        {!clickable && (
          <div className="close-button-modal">
            <div
              onClick={() => setOpen(false)}
              className="close-button-modal-x"
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function CompaniesWithInfoHeadSponsor() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    let filtered_companies = content.sv.companies.filter((company) => {
      return company.partner == "huvudsponsor";
    });
    filtered_companies.sort(() => Math.random() - 0.5);
    setCompanies(filtered_companies);
  }, []);
  return (
    <div className="landing-companies-gold">
      {companies &&
        companies.map((company) => {
          return (
            <CompanyInformationCard key={company.company} company={company} />
          );
        })}
    </div>
  );
}

export function CompaniesWithInfoSponsor() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    let filtered_companies = content.sv.companies.filter((company) => {
      return company.partner == "sponsor";
    });
    filtered_companies.sort(() => Math.random() - 0.5);
    setCompanies(filtered_companies);
  }, []);
  return (
    <div className="landing-companies-silver">
      {companies &&
        companies.map((company) => {
          return (
            <CompanyInformationCard
              key={company.company}
              showText={false}
              company={company}
            />
          );
        })}
    </div>
  );
}

export function CompaniesWithInfoStandard() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    let filtered_companies = content.sv.companies.filter((company) => {
      return company.partner == "mässplats";
    });
    filtered_companies.sort(() => Math.random() - 0.5);
    setCompanies(filtered_companies);
  }, []);
  return (
    <div className="landing-companies-standard">
      {companies &&
        companies.map((company) => {
          return (
            <CompanyInformationCard
              key={company.company}
              showText={false}
              company={company}
            />
          );
        })}
    </div>
  );
}
