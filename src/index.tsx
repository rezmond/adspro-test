import { render } from "react-dom";
import { App } from "./App";

const root = document.querySelector('#root');

if (!root) {
  throw new Error('There is no root element');
}

render(<App/>, root)