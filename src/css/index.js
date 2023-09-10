import React from "react";
import { useId } from "react";

export default function CSSExample() {
  const id = useId();

  function css(css) {
    const cssSplit = css.split(";");
    const cssFormat = cssSplit.map(
      (value) =>
        "." +
        id.replaceAll(":", "-") +
        "-" +
        value.replace(":", "-") +
        "{" +
        value +
        ";}"
    );
    const classNameFormat = cssSplit.map(
      (value) => id.replaceAll(":", "-") + "-" + value.replace(":", "-")
    );
    console.log("cssFormat", cssFormat);
    console.log("classNameFormat", classNameFormat);

    let style = document.querySelector("#style");
    if (!style) {
      style = document.createElement("style");
      style.id = "style";
    }

    style.innerHTML += cssFormat.join("\n") + "\n";

    document.head.appendChild(style);
    return classNameFormat.join(" ");
  }

  function test(css) {
    let style = document.querySelector("#style");
    if (!style) {
      style = document.createElement("style");
      style.id = "style";
    }

    style.innerHTML += `
      .rename-me {
        ${css[0]}
      }
    `;

    document.head.appendChild(style);
    return "rename-me";
  }
  return (
    // <div className={css("display:grid; justify-content:center; @media (min-width: 500px) {.justify-content: {justify-content:start}}")}>index</div>
    <div
      className={test`display:grid; justify-content:center; @media (min-width: 500px) {.rename-me: {justify-content:start}}`}
    >
      CSS
    </div>
  );
}
