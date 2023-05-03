import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-with-text.png";
import { AuthContext } from "../../hooks/AuthContext";

const Navbar = (): JSX.Element => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

    const handleClickLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
      setAuthenticated(false);
    };

  return (
    <div className="flex justify-end w-full p-4 border border-b-black">
      <nav className="flex justify-center space-x-8 gap-4">
        <NavLink
          to={"/"}
          className="font-bold px-3 py-2"
        >
          <img src={Logo} alt="" className="h-7 hover:drop-shadow-xl" />
        </NavLink>
        <NavLink
          to={"/courses"}
          className="font-bold px-3 py-2 hover:text-violet-800"
        >
          Courses
        </NavLink>
        {!authenticated && (
          <>
            <NavLink
              to={"/login"}
              className="font-bold px-3 py-2 hover:text-violet-800"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="font-bold px-3 py-2 hover:text-violet-800"
            >
              Register
            </NavLink>
          </>
        )}
        {authenticated && (
          <>
            <NavLink
              to={"/cart"}
              className="font-bold px-3 py-2 hover:text-violet-800"
            >
              Cart
            </NavLink>
            <NavLink
              to={"/profile"}
              className="font-bold px-3 py-2 hover:text-violet-800"
            >
              Profile
            </NavLink>
            <NavLink to={"/"} className="font-bold px-3 py-2 hover:text-violet-800" onClick={handleClickLogout}>Logout</NavLink>
            {/* <Button name={"Logout"} onClick={handleClickLogout} className="font-bold px-3 py-2 text-[#737373] hover:text-violet-800"/> */}
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
