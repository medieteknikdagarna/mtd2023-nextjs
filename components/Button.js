import React from "react";
import Link from "next/link";
export default function Button({
  style,
  href,
  onClick,
  type = "primary",
  size = "medium",
  children,
  disabled = false,
}) {
  if (disabled) {
    return (
      <div>
        <button
          disabled
          style={style}
          className={
            "mtd-button--" +
            type +
            " mtd-button--" +
            size +
            " mtd-button--disabled"
          }
        >
          {children}
        </button>
      </div>
    );
  }
  if (href) {
    return (
      <Link href={href}>
        <div>
          <button
            disabled={disabled}
            style={style}
            onClick={onClick}
            className={"mtd-button--" + type + " mtd-button--" + size}
          >
            {children}
          </button>
        </div>
      </Link>
    );
  } else {
    return (
      <div>
        <button
          disabled={disabled}
          style={style}
          onClick={onClick}
          className={"mtd-button--" + type + " mtd-button--" + size}
        >
          {children}
        </button>
      </div>
    );
  }
}
