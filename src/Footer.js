import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Image courtesy of{" "}
        <a
          href="https://unsplash.com/@mohamadaz"
          target="_blank"
          rel="noreferrer"
        >
          Mohammad Alizade
        </a>
        <br />
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/katherine-ruark-45a67257/"
          target="_blank"
          rel="noreferrer"
        >
          Katie Ruark <span role="img">🐈 </span>
        </a>
        <br />
        <a
          href="https://github.com/kruark/Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub repository
        </a>
      </p>
    </div>
  );
}