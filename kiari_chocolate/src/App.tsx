import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TestimoniosPage from "@/pages/testimonio";
import ProductosPage from "@/pages/productos";
import ContactoPage from "@/pages/contact";
import NosotrosPage from "@/pages/nosotros";
import ArticulosPage from "@/pages/articulo";
import MedallonesPage from "@/pages/Medallones";
import NuggetsPage from "@/pages/Nuggets";
import PisilloPage from "@/pages/pisillo";
import BlogsPage from "@/pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TestimoniosPage />} path="/test" />
      <Route element={<ProductosPage />} path="/prod" />
      <Route element={<ContactoPage />} path="/cont" />
      <Route element={<NosotrosPage />} path="/noso" />
      <Route element={<ArticulosPage />} path="/arti" />
      <Route element={<MedallonesPage />} path="/prod/m" />
      <Route element={<NuggetsPage />} path="/prod/n" />
      <Route element={<PisilloPage />} path="/prod/p" />
      <Route element={<BlogsPage />} path="/blog" />
    </Routes>
  );
}

export default App;
