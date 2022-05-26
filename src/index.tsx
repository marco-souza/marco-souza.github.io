/* @refresh reload */
import { render } from "solid-js/web";

import "uno.css";
// normalize.css
import "@unocss/reset/normalize.css";
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import "@unocss/reset/eric-meyer.css";
// preflights from tailwind
import "@unocss/reset/tailwind.css";
import App from "~/components/App";

render(() => <App />, document.getElementById("root") as HTMLElement);
