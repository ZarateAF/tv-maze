import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

const Navigation = () => {
  return (
    <BrowserRouter basename="/tv-maze">
      <Routes>
        <Route path="/detail" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
