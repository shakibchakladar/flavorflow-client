import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Logged out successfully");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm container px-10 mr-10 mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="w-auto h-7" src="" alt="" />
        <span className="font-bold text-3xl text-[#FA7F08]">Flavor<span className="text-[#429198]">Flow</span></span>
      </div>
      <ul className="menu menu-horizontal flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allfoods">All Foods</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <div className="dropdown dropdown-end z-50">
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
                <button
                  onClick={handleLogOut}
                  className="bg-gray-200 block text-center"
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
