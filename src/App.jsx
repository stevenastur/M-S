import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Galeria } from "./pages/galeria";
import { Notas } from "./pages/notas";
import { Nosotros } from "./pages/nosotros";

function App() {
  return (
    <div className="aplicacion">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
