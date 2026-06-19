import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "@/pages/Landing";
import Termos from "@/pages/Termos";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import Contactos from "@/pages/Contactos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/suporte" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}
