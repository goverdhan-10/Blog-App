import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out rounded-full shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
