/* @refresh reload */
import { render } from "solid-js/web";

import "virtual:uno.css";
// reset
import "@unocss/reset/tailwind.css";
// normalize.css
import App from "~/components/App";

render(() => <App />, document.getElementById("root") as HTMLElement);
