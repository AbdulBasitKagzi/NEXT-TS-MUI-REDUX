import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { notification } from "../../store/cart/cart.slice";
import { setErrorState } from "@/store/user/user.slice";
import { useDispatch } from "react-redux";

interface alertProps {
  type: any;
  title: string;
  message: string;
  openUp: boolean;
  closeDuration: number;
  setOpenUp?: (val: boolean) => void;
  backgroundColor: string;
}

function DescriptionAlerts({
  type,
  title,
  message,
  openUp,
  closeDuration,
  setOpenUp,
  backgroundColor,
}: alertProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setOpenUp && setOpenUp(false);
      dispatch(notification());
      dispatch(setErrorState());
    }, closeDuration);
  }, []);

  return (
    <div>
      <Snackbar open={openUp} autoHideDuration={closeDuration}>
        <Alert
          severity={type}
          sx={{
            backgroundColor: backgroundColor,
          }}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DescriptionAlerts;
