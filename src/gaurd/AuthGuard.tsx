import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

const AuthGuard = ({ children }: { children: ReactNode }): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("isAuth") !== "true") {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};
export default AuthGuard;
