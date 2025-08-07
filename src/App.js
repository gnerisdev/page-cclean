import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Diaristas from "./pages/Diaristas";
import Mensalistas from "./pages/Mensalistas";
import Avaliacao from "./pages/Avaliacao";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {/* Main content with left margin on desktop to account for sidebar */}
        <main className="min-h-screen lg:ml-[250px]">
          <Routes>
            <Route path="/page-cclean/" element={<Home />} />
            <Route path="/page-cclean/quem-somos" element={<About />} />
            <Route path="/page-cclean/visao-valores" element={<Vision />} />
            <Route path="/page-cclean/diaristas" element={<Diaristas />} />
            <Route path="/page-cclean/mensalistas" element={<Mensalistas />} />
            <Route path="/page-cclean/avaliacao" element={<Avaliacao />} />
            <Route path="/page-cclean/contato" element={<Contato />} />
          </Routes>
        </main>
        {/* Footer also with left margin on desktop */}
        <div className="lg:ml-[250px]">
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;