import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/productos/:type" element={<Products />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
