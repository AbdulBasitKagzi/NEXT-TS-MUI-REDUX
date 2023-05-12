import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";
import { assets } from "../../assets";
import { useDispatch } from "react-redux";
import { paymentInformation } from "./userPaymentInformation";
import { decrementPage } from "@/store/cart/cart.slice";
import { user_payment_detail } from "@/store/user/user.thunk";
// mui imports
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Radio,
  useTheme,
  InputAdornment,
  NoSsr,
} from "@mui/material";

interface userPaymentInformationprops {
  total: number;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  setPaymentInformation: React.Dispatch<
    React.SetStateAction<paymentInformation>
  >;
  paymentInformation: paymentInformation;
}

function UserPaymentInformation({
  total,
  selectedValue,
  setPaymentInformation,
  setSelectedValue,
  paymentInformation,
}: userPaymentInformationprops): JSX.Element {
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setPaymentInformation((prev) => ({
      ...prev,
      radio_buttons: event.target.value,
    }));
  };

  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required("Card name is required"),
      cardNumber: Yup.string()
        .min(16, "Enter 16 digit card number")
        .required("Card number is required"),
      // expiration: Yup.string()
      //   .matches(
      //     /^((0[1-9])|(1[0-2]))[/]*((2[3-9]))$/,
      //     "Enter valid credit card expiry date"
      //   )
      //   .required("Card expiry date is required"),
      expiration: Yup.string()
        .required("Expiry date is required")
        .matches(
          /^((0[1-9])|(1[0-2]))[/]*((2[3-9]))$/,
          "Enter valid credit card expiry date"
        )
        .test("expiration", "Card is already expired", function (value) {
          const year = new Date().getFullYear() % 100;
          let month = new Date().getMonth().toString();
          if (+month < 10) {
            month = "0" + month;
          }
          let mm = value.substring(0, 2);
          let yy = value.substring(3);

          return +yy > year || (+yy == year && +mm >= +month);
          // all good because the yy from expiryDate is greater than the current yy
          // or if the yy from expiryDate is the same as the current yy but the mm
          // from expiryDate is greater than the current mm
          // return true;
        }),
      cvv: Yup.string()
        .min(3, "Enter 3 digit cvv number")
        .required("CVV number is required"),
    }),
    onSubmit: (values) => {
      let data = { ...paymentInformation, ...values };
      setPaymentInformation((prev) => ({
        ...prev,
        ...values,
      }));

      dispatch(user_payment_detail(data));
    },
    validateOnBlur: true,
  });

  return (
    <NoSsr>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ maxWidth: "80%", mx: "auto" }}>
          <Box sx={{ textAlign: "left", mt: 14 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "inline-block",
                color: theme.palette.error.contrastText,
                fontWeight: 700,
                mb: 5,
              }}
            >
              Payment Method
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { md: 2, sm: 0, xs: 1 },
              justifyContent: { md: "start", xs: "center" },
            }}
          >
            <Box
              sx={{
                display: { sm: "flex", xs: "flex" },
                flexWrap: { xs: "wrap", sm: "nowrap" },
                alignItems: "center",
                gap: { sm: 1, xs: 0 },
              }}
            >
              <Radio
                checked={selectedValue === "creditCard"}
                onChange={handleChange}
                value="creditCard"
                name="radio_buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: "#111827",
                  "&.Mui-checked": {
                    color: "#111827",
                  },
                }}
              />
              <Image
                src={assets.icons.Credit_Card}
                alt="creditcard"
                style={{ paddingRight: "20px", width: "90px" }}
              />
            </Box>
            <Box
              sx={{
                display: { sm: "flex", xs: "flex" },
                flexWrap: { xs: "wrap", sm: "nowrap" },

                alignItems: "center",
                gap: { sm: 1, xs: 0 },
              }}
            >
              <Radio
                checked={selectedValue === "paypal"}
                onChange={handleChange}
                value="paypal"
                name="radio_buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: theme.palette.primary.contrastText,
                  "&.Mui-checked": {
                    color: theme.palette.primary.contrastText,
                  },
                }}
              />
              <Image
                src={assets.icons.paypal}
                alt="creditcard"
                width={90}
                style={{ paddingRight: "20px" }}
              />
            </Box>
            <Box
              sx={{
                display: { sm: "flex", xs: "flex" },
                flexWrap: { xs: "wrap", sm: "nowrap" },
                alignItems: "center",
                gap: { sm: 1, xs: 0 },
              }}
            >
              <Radio
                checked={selectedValue === "bitcoin"}
                onChange={handleChange}
                value="bitcoin"
                name="radio_buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: theme.palette.primary.contrastText,
                  "&.Mui-checked": {
                    color: theme.palette.primary.contrastText,
                  },
                }}
              />
              <Image src={assets.icons.Bitcoin} alt="creditcard" />
            </Box>
          </Box>
          <Box sx={{ textAlign: "left", mt: 10 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "inline-block",
                color: theme.palette.error.contrastText,
                fontWeight: 700,
                mb: 5,
              }}
            >
              Payment Details
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="cardName"
                name="cardName"
                label="Card holder's name"
                value={formik.values.cardName}
                fullWidth
                placeholder="alex patel"
                autoComplete="given-name"
                variant="standard"
                sx={{
                  paddingBottom: 4,
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.cardName && formik.touched.cardName ? (
                <Box
                  sx={{
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "8px",
                    p: 1,
                    mb: 3,
                  }}
                >
                  {formik.errors.cardName}
                </Box>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={12}>
              <PatternFormat
                id="cardNumber"
                label="Card number"
                customInput={TextField}
                variant="standard"
                sx={{
                  width: "100%",
                  paddingBottom: 4,
                }}
                displayType="input"
                value={formik.values.cardNumber}
                format="#### #### #### ####"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image src={assets.images.visa} alt="visa" />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.cardNumber && formik.touched.cardNumber ? (
                <Box
                  sx={{
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "8px",
                    p: 1,
                    mb: 3,
                  }}
                >
                  {formik.errors.cardNumber}
                </Box>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <PatternFormat
                customInput={TextField}
                id="expiration"
                displayType="input"
                label="Expiry date"
                value={formik.values.expiration}
                format="##/##"
                variant="standard"
                sx={{
                  width: "100%",
                  paddingBottom: 4,
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.expiration && formik.touched.expiration ? (
                <Box
                  sx={{
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "8px",
                    p: 1,
                    mb: 3,
                  }}
                >
                  {formik.errors.expiration}
                </Box>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="cvv"
                name="cvv"
                label="CVV code"
                type="number"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.toString().slice(0, 3);
                }}
                value={formik.values.cvv}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                placeholder="123"
                sx={{
                  paddingBottom: 4,
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.cvv && formik.touched.cvv ? (
                <Box
                  sx={{
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "8px",
                    p: 1,
                    mb: 3,
                  }}
                >
                  {formik.errors.cvv}
                </Box>
              ) : null}
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: "left",
              width: { lg: "55%", md: "78%", sm: "92%", xs: "100%" },
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                color: theme.palette.warning.contrastText,
                fontSize: "18px",
              }}
            >
              By Clicking *Confirm Payment* I agree to company terms of services
            </Typography>
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xs: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              mt: 8,
              gap: { sm: 5, xs: 2 },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: 0,
                mb: { md: 0, sm: 2, xs: 0 },
                width: "30%",
                height: "60px",
                textTransform: "capitalize",
                fontSize: { sm: "20px", xs: "16px" },
              }}
              onClick={() => dispatch(decrementPage())}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.success.main,
                borderRadius: 0,
                mb: { md: 0, sm: 2 },
                width: "70%",
                height: "60px",
                textTransform: "capitalize",
                fontSize: { md: "20px", sm: "14px", xs: "16px" },
              }}
              onClick={() => {
                // handlePaymentValidation(paymentInformation);
              }}
            >
              Confirm Payment of: $ {total}
            </Button>
          </Box>
        </Box>
      </form>
    </NoSsr>
  );
}

export default UserPaymentInformation;
