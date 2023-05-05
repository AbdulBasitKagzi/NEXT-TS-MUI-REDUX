import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateSubTotal } from "../../store/cart/cart.slice";
import { RootState } from "../../store/store";

import { vat_tax, shipping } from "../../data/Constants";
import Layout from "../../layout";
import { user } from "../../forms/userInformation/userInformation.types";
import { paymentInformation } from "../../forms/userPaymentInformation/userPaymentInformation";
import { useRouter } from "next/router";

// mui imports

import { Box } from "@mui/material";

// for date and time
import dayjs from "dayjs";
import DescriptionAlerts from "../../components/Alert";

import UserInformation from "../../forms/userInformation";
import UserPaymentInformation from "../../forms/userPaymentInformation";
import ConfirmationPage from "../../sections/ConfirmationPage/index";
import ProductCard from "../../sections/ProductCard";
import StepperComponent from "@/components/Stepper";

const ShippingPage: React.FC = () => {
  const router = useRouter();
  const steps = ["Shipping", "Billing", "Confirmation"];
  const { cartProducts, subTotal, page } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  // const [page, setPage] = useState<number>(1);
  const [date_time, setDate_Time] = useState<any>(dayjs());
  const [selectedValue, setSelectedValue] = useState("creditCard");
  const [userInformation, setUserInformation] = useState<user>({
    firstName: "",
    lastName: "",
    emailaddress: "",
    phoneNumber: "",
    city: "australia",
    address: "",
    zipCode: "",
    date: date_time.toString(),
    time: date_time.toString(),
  });
  const [paymentInformation, setPaymentInformation] =
    useState<paymentInformation>({
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
      radio_buttons: selectedValue,
    });

  const [openUp, setOpenUp] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: string;
    title: string;
    message: string;
  }>({
    type: "",
    title: "",
    message: "",
  });

  // useEffect(() => {
  //   cartProducts.length === 0 && router.push("/");
  // }, [cartProducts.length]);

  useEffect(() => {
    dispatch(calculateSubTotal());
  }, [cartProducts]);

  useEffect(() => {
    console.log("user", userInformation);
  }, [userInformation]);

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      {openUp && (
        <DescriptionAlerts
          openUp={openUp}
          setOpenUp={setOpenUp}
          type={alert.type}
          title={alert.title}
          message={alert.message}
          closeDuration={2000}
          backgroundColor="#cc0000"
        />
      )}
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Box
            sx={{
              width: {
                lg: "1000px",
                md: "725px",
                sm: "600px",
                xs: "100%",
              },
              paddingTop: "43px",
              ml: { sm: page === 3 ? "auto" : 0, xs: "auto" },
              mr: { sm: page === 3 ? "auto" : 0, xs: "auto" },
              // mx: page === 3 ? 'auto' : 0
            }}
          >
            <StepperComponent page={page} steps={steps} />
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            justifyContent: "space-evenly",
            flexDirection: "row-reverse",
          }}
        >
          {page !== 3 && (
            <Box
              sx={{
                width: { lg: "35%", md: "40%", sm: "50%", xs: "100%" },
                mt: { xs: 4 },
                px: { md: 0, sm: 2, xs: 1.5 },
              }}
            >
              <ProductCard />
            </Box>
          )}
          <Box
            sx={{
              maxWidth: {
                sm: "50%",
                xs: "100%",
              },
            }}
          >
            {page === 1 && (
              <UserInformation
                userInformation={userInformation}
                setUserInformation={setUserInformation}
              />
            )}

            {page === 2 && (
              <UserPaymentInformation
                total={subTotal + vat_tax + shipping}
                setSelectedValue={setSelectedValue}
                setPaymentInformation={setPaymentInformation}
                paymentInformation={paymentInformation}
                selectedValue={selectedValue}
                // handlePaymentValidation={handlePaymentValidation}
              />
            )}
            {page === 3 && (
              <ConfirmationPage userInformation={userInformation} />
            )}
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default ShippingPage;
