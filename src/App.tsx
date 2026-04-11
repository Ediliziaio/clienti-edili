import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Lazy-loaded routes for code splitting
const Index = lazy(() => import("./pages/Index.tsx"));
const Servizi = lazy(() => import("./pages/Servizi.tsx"));
const Progetti = lazy(() => import("./pages/Progetti.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo.tsx"));
const Contatti = lazy(() => import("./pages/Contatti.tsx"));
const CittaGeo = lazy(() => import("./pages/CittaGeo.tsx"));
const ServizioDettaglio = lazy(() => import("./pages/ServizioDettaglio.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/progetti" element={<Progetti />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/servizi/:servizio" element={<ServizioDettaglio />} />
            <Route path="/siti-web-edili-milano" element={<CittaGeo />} />
            <Route path="/siti-web-edili-roma" element={<CittaGeo />} />
            <Route path="/siti-web-edili-torino" element={<CittaGeo />} />
            <Route path="/siti-web-edili-napoli" element={<CittaGeo />} />
            <Route path="/siti-web-edili-bologna" element={<CittaGeo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
