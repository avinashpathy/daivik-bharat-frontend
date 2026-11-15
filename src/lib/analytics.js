import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-0LH7TEDYQ7";
let ready = false;

export function trackPageView(path) {
  if (import.meta.env.DEV || import.meta.env.VITE_DISABLE_ANALYTICS === "true") return;
  if (!ready) {
    ReactGA.initialize(MEASUREMENT_ID);
    ready = true;
  }
  ReactGA.send({ hitType: "pageview", page: path });
}
