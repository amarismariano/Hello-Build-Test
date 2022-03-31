import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div>Auth</div>

      <Outlet />
    </>
  );
};

export default AuthLayout;
