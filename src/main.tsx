import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./router";
import "./index.css";

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes },
  // Custom setup function (optional)
  () => {
    // Custom setup can go here
  },
);
