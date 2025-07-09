import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/product/Menu";
import CategoryPage from '../pages/product/CategoryPage';

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:category" element={<CategoryPage/>} />
    </Routes>
  );
}

export default AppRoutes;
