import { lightLogo } from "../../shared/images";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const btnClasses =
    "btn btn-ghost bg-transparent border-transparent border-0 border-t-2 border-b-2 hover:border-main btn-sm text-base sm:text-[18px] font-bold";

  const generalLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Movies" },
    { to: "/contact", label: "TV Shows" },
  ];

  return (
    <div className="navbar bg-base-100/60 shadow-sm fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-lg">
              <a>Home</a>
            </li>
            <li className="text-lg">
              <a>Movies</a>
            </li>
            <li className="text-lg">
              <a>TV Shows</a>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="bg-transparent">
          <img
            className="hidden xs:block w-15 sm:w-24"
            src={lightLogo}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {generalLinks.map((link, index) => (
            <li className="text-xl mx-3 font-bold">
              <NavLink
                key={`${link.to}_${index}`}
                className={({ isActive }) =>
                  isActive
                    ? " text-white text-shadow-main border-0 border-t-2 border-b-2 border-main"
                    : "border-transparent border-t-2 border-b-2 hover:border-main  hover:text-shadow-main "
                }
                to={link.to}
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className={btnClasses}>login</NavLink>
        <NavLink className={`${btnClasses} ms-1 me-2 sm:ms-2 md:me-10`}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default MainNav;
