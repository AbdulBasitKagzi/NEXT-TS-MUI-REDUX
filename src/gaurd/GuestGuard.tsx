import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
// import { getLocalstorage } from "../utils/localstorage";

// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";

const GuestGuard = ({ children }: { children: ReactNode }): JSX.Element => {
  const router = useRouter();
  const { User } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [User]);

  return <>{children}</>;
};
export default GuestGuard;
