import { Outlet } from "react-router-dom";
import MainNav from "../../Components/Navbar/MainNav";

const Root = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default Root;
