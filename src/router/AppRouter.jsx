import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../components/globalStyles/Global.styles";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
          <Route path="register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
