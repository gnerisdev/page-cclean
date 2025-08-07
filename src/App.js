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
      <BrowserRouter basename="/page-cclean">
        <Navigation />
        {/* Main content with left margin on desktop to account for sidebar */}
        <main className="min-h-screen lg:ml-[250px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/visao-valores" element={<Vision />} />
            <Route path="/diaristas" element={<Diaristas />} />
            <Route path="/mensalistas" element={<Mensalistas />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
            <Route path="/contato" element={<Contato />} />
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