import { ReactNode, useEffect } from "react";
import { getLocalstorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

const GuestGuard = ({ children }: { children: ReactNode }): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getLocalstorage("isAuth") === "true") {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};
export default GuestGuard;
