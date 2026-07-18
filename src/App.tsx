import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GtmRouteTracker from "@/components/GtmRouteTracker";

import Index from "./pages/Index.tsx";
import Servizi from "./pages/Servizi.tsx";
import Progetti from "./pages/Progetti.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ChiSiamo from "./pages/ChiSiamo.tsx";
import Contatti from "./pages/Contatti.tsx";
import CittaGeo from "./pages/CittaGeo.tsx";
import ServizioDettaglio from "./pages/ServizioDettaglio.tsx";
import Grazie from "./pages/Grazie.tsx";
import NotFound from "./pages/NotFound.tsx";
import { blogPosts } from "./data/blogPosts";

const queryClient = new QueryClient();

// Slug dei servizi con pagina di dettaglio prerenderizzata.
const SERVICE_SLUGS = [
  "sito-web-edile",
  "seo-locale",
  "google-my-business",
  "social-media",
];

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GtmRouteTracker />
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "servizi", element: <Servizi /> },
      { path: "progetti", element: <Progetti /> },
      { path: "blog", element: <Blog /> },
      {
        path: "blog/:slug",
        element: <BlogPost />,
        getStaticPaths: () => blogPosts.map((p) => `/blog/${p.slug}`),
      },
      { path: "chi-siamo", element: <ChiSiamo /> },
      { path: "contatti", element: <Contatti /> },
      { path: "grazie", element: <Grazie /> },
      {
        path: "servizi/:servizio",
        element: <ServizioDettaglio />,
        getStaticPaths: () => SERVICE_SLUGS.map((s) => `/servizi/${s}`),
      },
      { path: "siti-web-edili-milano", element: <CittaGeo /> },
      { path: "siti-web-edili-roma", element: <CittaGeo /> },
      { path: "siti-web-edili-torino", element: <CittaGeo /> },
      { path: "siti-web-edili-napoli", element: <CittaGeo /> },
      { path: "siti-web-edili-bologna", element: <CittaGeo /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
