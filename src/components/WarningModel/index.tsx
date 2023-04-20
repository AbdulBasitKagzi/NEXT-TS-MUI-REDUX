import * as React from "react";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

interface warningModelProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const WarningModel: React.FC<warningModelProps> = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false);
  const router = useRouter();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Please login to add products to cart
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, textTransform: "capitalize" }}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default WarningModel;
