import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

 const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    toast.success("Logout succesfully")
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
export default Logout;