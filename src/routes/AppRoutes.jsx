import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/product/Menu";
import Contact from "../pages/annexes/Contact";
import CategoryPage from '../pages/product/CategoryPage';
import Story from "../pages/annexes/Story";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:category" element={<CategoryPage/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/histoire" element={<Story />} />
    </Routes>
  );
}

export default AppRoutes;
