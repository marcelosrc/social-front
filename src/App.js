import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/fonts/Roboto-Light.ttf";
import "./styles/Global.module.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
