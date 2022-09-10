import React from "react";

export default function InfoSection({ children, tag, title, body, className }) {
  const btnDivs =
    children !== undefined ? (
      <div className="infosection--buttons">{children}</div>
    ) : (
      ""
    );
  return (
    <div className={"infosection " + className}>
      <span style={{ textTransform: "uppercase" }}>{tag}</span>
      <h2>{title}</h2>
      <p>{body}</p>
      {btnDivs}
    </div>
  );
}
