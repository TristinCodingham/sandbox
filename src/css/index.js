import React from "react";
import { useId } from "react";

export default function CSSExample() {
  const id = useId();

  function css(css) {
    const cssSplit = css.split(" ");
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
  return (
    <div className={css("display:grid justify-content:center")}>index</div>
  );
}
