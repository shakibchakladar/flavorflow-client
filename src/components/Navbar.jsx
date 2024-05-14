import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Logged out successfully");
  };

  return (
    <div className="container fixed z-10 flex items-center justify-between px-10 py-5 mx-auto mb-20 mr-10 shadow-sm navbar bg-base-100">
      <div className="flex items-center gap-2">
        <img className="w-auto h-7" src="" alt="" />
        <span className="font-bold text-3xl text-[#FA7F08]">
          Flavor<span className="text-[#429198]">Flow</span>
        </span>
      </div>
      <ul className="flex gap-4 menu menu-horizontal">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border bg-orange-600 btn text-primary font-bold"
                : " btn font-bold"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border bg-orange-600 btn text-primary font-bold"
                : " btn font-bold"
            }
            to="/allfood"
          >
            All Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border bg-orange-600 btn text-primary font-bold"
                : " btn font-bold"
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
      </ul>
      <div>
        {!user ? (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border bg-orange-600 btn text-primary font-bold"
                : " btn font-bold"
            }
            to="/login"
          >
            Login
          </NavLink>
        ) : (
          <div className="z-50 dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title={user?.displayName}>
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-2">
                <button className="block text-center bg-gray-200">
                  <Link to="/myaddedfood">My added food items</Link>
                </button>
              </li>
              <li className="mt-2">
                <button className="block text-center bg-gray-200">
                  <Link to="/addfood">Add food item</Link>
                </button>
              </li>
              <li className="mt-2">
                <button className="block text-center bg-gray-200">
                  <Link to="/mypurchase">My ordered food</Link>
                </button>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="block text-center bg-gray-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
