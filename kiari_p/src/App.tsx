import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import NosotrosPage from "@/pages/nosotros";
import BlogsPage from "@/pages/blog";
import PisilloPage from "@/pages/pisillo";
import { ScrollReset } from "./hooks/scrollr_reset";
import ScrollToHashElement from "./hooks/scroll_hash";

function App() {
  return (
    <>
      <ScrollReset />
      <ScrollToHashElement />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<NosotrosPage />} path="/nosotros" />
        <Route element={<PisilloPage />} path="/pisillo" />
        <Route element={<BlogsPage />} path="/blog" />
      </Routes>
    </>
  );
}

export default App;
