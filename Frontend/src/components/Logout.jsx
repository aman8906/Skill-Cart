import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    try {
      setUser(null); // ✅ reset user context
      localStorage.removeItem("Users"); // ✅ remove from localStorage
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload(); // or use `navigate("/")` if preferred
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      {user && (
        <button
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Logout;
