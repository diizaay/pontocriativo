import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import IndustriesPage from "./pages/IndustriesPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/toaster";
import ScrollToTopButton from "./components/ScrollToTopButton";

const ScrollRestoration = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const scrollToAnchor = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      scrollToAnchor();
      const fallback = window.setTimeout(scrollToAnchor, 150);
      return () => window.clearTimeout(fallback);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    return () => {};
  }, [pathname, hash]);

  return null;
};

const AppLayout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contato";

  return (
    <>
      {!isContactPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/industrias" element={<IndustriesPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      {!isContactPage && <Footer />}
      <ScrollToTopButton />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollRestoration />
        <AppLayout />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
