import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";

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
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import Settore from "./pages/Settore.tsx";
import Settori from "./pages/Settori.tsx";
import NotFound from "./pages/NotFound.tsx";
import { blogPosts } from "./data/blogPosts";
import { citySlugs } from "./data/cities";
import { settoreSlugs } from "./data/settori";
import { SERVICE_SLUGS } from "./data/services";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <CookieBanner />
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
      { path: "settori", element: <Settori /> },
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
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "cookie-policy", element: <CookiePolicy /> },
      {
        path: "servizi/:servizio",
        element: <ServizioDettaglio />,
        getStaticPaths: () => SERVICE_SLUGS.map((s) => `/servizi/${s}`),
      },
      ...citySlugs.map((slug) => ({
        path: `siti-web-edili-${slug}`,
        element: <CittaGeo />,
      })),
      ...settoreSlugs.map((slug) => ({
        path: slug,
        element: <Settore />,
      })),
      { path: "*", element: <NotFound /> },
    ],
  },
];
