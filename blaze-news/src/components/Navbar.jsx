import Logo from "../../public/images/blaze_logo.svg";
import {Link, Outlet} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns=""
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link to="/"><a>Home</a></Link>
              </li>
              <li>
                <a>Explore</a>
                <ul className="p-2">
                  <li>
                    <a>Entertainment</a>
                  </li>
                  <li>
                    <a>Business</a>
                  </li>
                  <li>
                    <a>Sports</a>
                  </li>
                  <li>
                    <a>Health</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact"><a>Contact Us</a></Link>
              </li>
            </ul>
          </div>
          <img src={Logo} alt="blaze_logo" className="h-10" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"><a>Home</a></Link>
            </li>
            <li>
              <details>
                <summary>Explore</summary>
                <ul className="p-2">
                  <li>
                    <a>Entertainment</a>
                  </li>
                  <li>
                    <a>Business</a>
                  </li>
                  <li>
                    <a>Sports</a>
                  </li>
                  <li>
                    <a>Health</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <Link to="/contact"><a>Contact Us</a></Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-xl">Login</a>
        </div>
      </div>
      <hr className="h-px bg-gray-900 border-0 dark:bg-gray-900" />
      <Outlet/>
    </>
  );
};
