import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateSubTotal } from "../../store/cart/cart.slice";
import { RootState } from "../../store/store";
import { useRouter } from "next/router";
import { vat_tax, shipping } from "../../data/Constants";
import Layout from "../../layout";
import { user } from "../../forms/userInformation/userInformation.types";
import { paymentInformation } from "../../forms/userPaymentInformation/userPaymentInformation";

// mui imports

import { Box } from "@mui/material";

// for date and time
import dayjs from "dayjs";
import UserInformation from "../../forms/userInformation";
import UserPaymentInformation from "../../forms/userPaymentInformation";
import ConfirmationPage from "../../sections/ConfirmationPage/index";
import ProductCard from "../../sections/ProductCard";
import StepperComponent from "@/components/Stepper";

const ShippingPage: React.FC = () => {
  const steps = ["Shipping", "Billing", "Confirmation"];

  const { cartProducts, subTotal, page } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

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
    date: date_time.toISOString(),
    time: new Date(date_time).toTimeString(),
  });
  const [paymentInformation, setPaymentInformation] =
    useState<paymentInformation>({
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
      radio_buttons: selectedValue,
    });

  useEffect(() => {
    dispatch(calculateSubTotal());
  }, [cartProducts]);

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
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
