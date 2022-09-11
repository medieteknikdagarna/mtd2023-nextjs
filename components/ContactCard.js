import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext } from "react";

import { languageContext } from "../pages/_app";

export function ClipboardButton(
  { textToCopy, style, fontColor = "var(--color-dark)" },
  backgroundColors = ["#ffecdf", "transparent"]
) {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useContext(languageContext);

  const handleCopy = (event) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 3000);
  };
  let text = lang === "sv" ? "Kopierad! ✌️" : "Copied! ✌️";

  const chLength = textToCopy.length + "ch";
  return (
    <div style={style} className="clipboard-button">
      <div
        className="clipboard-container"
        style={{
          backgroundColor: copied ? backgroundColors[0] : backgroundColors[1],
        }}
      >
        <div className="clipboard-button--icon">
          <i>
            <FontAwesomeIcon
              onClick={handleCopy}
              style={{ cursor: "pointer" }}
              icon={faCopy}
            />
          </i>
        </div>
        <input
          readOnly
          style={{
            width: chLength,
            textAlign: copied ? "center" : "left",
            color: fontColor,
          }}
          onClick={handleCopy}
          type="text"
          value={copied ? text : textToCopy}
        ></input>
      </div>
    </div>
  );
}

export default function ContactCard({ title, body, textToCopy }) {
  return (
    <div className="contact-card">
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <ClipboardButton textToCopy={textToCopy} />
    </div>
  );
}
