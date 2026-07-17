import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./index.css";

// Entry unificato SSG + client: durante il build vite-react-ssg pre-renderizza
// ogni rotta in HTML statico; nel browser idrata la stessa app.
export const createRoot = ViteReactSSG({ routes });
