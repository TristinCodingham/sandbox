import React, { useState } from "react";
import "./input.css";

export default function Input() {
  const [error, setError] = useState("");

  return (
    <div className="container">
      <label>Name</label>
      <input
        type="text"
        pattern="[A-Za-z]*"
        title="Upper case & lower case letters. No numbers/special characters"
        onInvalid={(e) =>
          setError(e.target.validationMessage + " " + e.target.title)
        }
        onInput={(e) =>
          setError(e.target.validationMessage + " " + e.target.title)
        }
        required
      />
      <div className="error" data-error={error}></div>
    </div>
  );
}
