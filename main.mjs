import "./style.css";
import viteLogo from "./vite.svg";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.mjs";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p>
      We are using Node.js <span id="node-version"></span>,Chromium <span id="chrome-version"></span>,and Electron <span id="electron-version"></span>.
    <p>
  </div>
`;

setupCounter(document.querySelector("#counter"));