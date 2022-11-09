import React from "react";
import { CompanyInformationCard } from "./CompaniesWithInfo";
import Backdrop from "./Backdrop";

export default function CompanyModal({ company, closeFunction }) {
  return (
    <Backdrop closeFunction={closeFunction}>
      <div className="modal-container">
        <CompanyInformationCard clickable={false} company={company} />
      </div>
    </Backdrop>
  );
}
