import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TestimoniosPage from "@/pages/testimonio";
import ProductosPage from "@/pages/productos";
import ContactoPage from "@/pages/contact";
import NosotrosPage from "@/pages/nosotros";
import BlogsPage from "@/pages/blog";
import ArticulosPage from "@/pages/articulos";
import MedallonesPage from "@/pages/Medallones";
import NuggetsPage from "@/pages/Nuggets";
import PisilloPage from "@/pages/pisillo";
import { ScrollReset } from "./components/scrollr_reset";
import ScrollToHashElement from "./components/scroll_hash";
import RecetaPage from "./pages/receta";

function App() {
  return (
    <>
      <ScrollReset />
      <ScrollToHashElement />
      <Routes>
        <Route element={<IndexPage />} path="/k" />
        <Route element={<TestimoniosPage />} path="/test" />
        <Route element={<ProductosPage />} path="/prod" />
        <Route element={<ContactoPage />} path="/cont" />
        <Route element={<NosotrosPage />} path="/noso" />
        <Route element={<BlogsPage />} path="/blog" />
        <Route element={<ArticulosPage />} path="/blog/articulo/:id" />
        <Route element={<RecetaPage />} path="/blog/receta/:id" />
        <Route element={<MedallonesPage />} path="/prod/m" />
        <Route element={<NuggetsPage />} path="/prod/n" />
        <Route element={<PisilloPage />} path="/prod/p" />
      </Routes>
    </>
  );
}

export default App;
