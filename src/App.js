import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./features/common/fonts/Roboto-Light.ttf";
import "./features/common/Common.module.css";
import Home from "./pages/Home";
import Register from "./pages/Register";

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
