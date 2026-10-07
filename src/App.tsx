import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ChargeEasyPrivacyPage from "./pages/ChargeEasyPrivacyPage";
import CursorGlow from "./components/CursorGlow";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen overflow-x-hidden bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-500">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="cyber-grid absolute inset-0" />
            <div className="noise-overlay absolute inset-0" />
            <div className="scanline-overlay absolute inset-0" />
            <div className="ambient-orb absolute -top-24 -left-20 h-80 w-80 rounded-full bg-zinc-800/20 dark:bg-white/20" />
            <div className="ambient-orb absolute right-0 top-1/3 h-72 w-72 rounded-full bg-zinc-600/15 dark:bg-zinc-200/20" />
          </div>

          <CursorGlow />

          <div className="relative z-10">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy/charge-easy" element={<ChargeEasyPrivacyPage />} />
                <Route path="/privacy-policy" element={<ChargeEasyPrivacyPage />} />
                <Route path="/charge-easy/privacy" element={<ChargeEasyPrivacyPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
