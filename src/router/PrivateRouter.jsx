import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("userInfo"));
  console.log(user);
  // const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
