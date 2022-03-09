import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/detail" element={<Details />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
