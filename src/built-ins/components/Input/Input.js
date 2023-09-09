import React, { useState } from "react";
import "./input.css";

export default function Input() {
  const [error, setError] = useState("");

  return (
    <form onInvalid={(e) => e.preventDefault()}>
      <div className="container">
        <input
          type="text"
          pattern="[A-Za-z]*"
          title="[A-Za-z]"
          onInvalid={(e) => setError(e.target.validationMessage)}
          onInput={(e) => setError(e.target.validationMessage)}
          required
        />
        <div className="error">{error}</div>
      </div>
      <div className="container">
        <input
          type="text"
          pattern="[A-Za-z]*"
          title="[A-Za-z]"
          onInvalid={(e) => setError(e.target.validationMessage)}
          onInput={(e) => setError(e.target.validationMessage)}
          disabled
        />
        <div className="error">{error}</div>
      </div>
      <div className="container">
        <input
          type="text"
          pattern="[A-Za-z]*"
          title="[A-Za-z]"
          onInvalid={(e) => setError(e.target.validationMessage)}
          onInput={(e) => setError(e.target.validationMessage)}
          readOnly
        />
        <div className="error">{error}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
