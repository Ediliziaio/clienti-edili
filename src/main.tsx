import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./index.css";
import { salvaParametriCampagna } from "./lib/eicForm";

// UTM / gclid / fbclid dell'atterraggio: il form li riceve anche se è su
// un'altra pagina (nel build SSG non fa nulla: non c'è window).
salvaParametriCampagna();

// Entry unificato SSG + client: durante il build vite-react-ssg pre-renderizza
// ogni rotta in HTML statico; nel browser idrata la stessa app.
export const createRoot = ViteReactSSG({ routes });
