import React from "react";
import ReactDOM from "react-dom"

const page = (
  <div>
    <h1>My first website in react</h1>
    <h3>Just learning react</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

// document.getElementById("root").append(JSON.stringify(page))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)