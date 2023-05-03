import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../hooks/AuthContext";
import Button from "../atoms/Button";

const Navbar = (): JSX.Element => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

    const handleClickLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
      setAuthenticated(false);
    };

  return (
    <div className="flex justify-end w-full fixed z-20 top-0 left-0 p-8">
      <nav className="flex justify-center space-x-10 gap-4">
        <NavLink
          to={"/"}
          className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
        >
          <img src={Logo} alt="" className="h-8" />
        </NavLink>
        <NavLink
          to={"/courses"}
          className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
        >
          Courses
        </NavLink>
        {!authenticated && (
          <>
            <NavLink
              to={"/login"}
              className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
            >
              Register
            </NavLink>
          </>
        )}
        {authenticated && (
          <>
            <NavLink
              to={"/cart"}
              className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
            >
              Cart
            </NavLink>
            <NavLink
              to={"/profile"}
              className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"
            >
              Profile
            </NavLink>
          </>
        )}
        <Button name={"Logout"} onClick={handleClickLogout} className="font-bold px-3 py-2 text-[#737373] hover:text-slate-900"/>
      </nav>
    </div>
  );
};

export default Navbar;
