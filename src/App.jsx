import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
