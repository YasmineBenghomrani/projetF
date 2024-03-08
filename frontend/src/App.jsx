import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AppBarMUI from "./components/AppBarMui";
import Men from "./pages/Men";
import Woman from "./pages/woman";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <AppBarMUI />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
