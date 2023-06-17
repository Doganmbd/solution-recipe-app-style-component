import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("userInfo"))

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
