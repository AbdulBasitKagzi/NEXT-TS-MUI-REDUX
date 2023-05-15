import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { user } from "./userInformation.types";
import { user_shipping_detail } from "@/store/user/user.thunk";
import * as Yup from "yup";

// mui imports
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface UserInformationType {
  userInformation: user;
  setUserInformation: React.Dispatch<React.SetStateAction<user>>;
}

function UserInformation({
  setUserInformation,
  userInformation,
}: UserInformationType): JSX.Element {
  const theme = useTheme();
  const router = useRouter();
  const [date_time, setDate_Time] = useState<any>(dayjs());

  const handleDate = (newValue: any) => {
    setDate_Time(newValue);
    setUserInformation((prev) => ({
      ...prev,
      date: newValue.toISOString(),
    }));
  };
  const handleTime = (newValue: any) => {
    setDate_Time(newValue);
    setUserInformation((prev) => ({
      ...prev,
      time: new Date(newValue).toTimeString(),
    }));
  };

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (router.isReady) {
      setUserInformation((prev) => ({
        ...prev,
        emailaddress: localStorage.getItem("email") || "",
      }));
    }
  }, [router.isReady]);

  const formik = useFormik({
    initialValues: {
      firstName: userInformation.firstName ? userInformation.firstName : "",
      lastName: userInformation.lastName ? userInformation.lastName : "",
      emailaddress: router.isReady ? localStorage.getItem("email") : "",
      phoneNumber: userInformation.phoneNumber
        ? userInformation.phoneNumber
        : "",
      city: userInformation.city ? userInformation.city : "australia",
      address: userInformation.address ? userInformation.address : "",
      zipCode: userInformation.zipCode ? userInformation.zipCode : "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      emailaddress: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      phoneNumber: Yup.string()
        .min(10, "Please enter 10 digit phone number")
        .required("Phone number is required"),
      city: Yup.string(),
      address: Yup.string().required("Address is required"),
      zipCode: Yup.string()
        .min(6, "Please enter 6 digit zip code")
        .required("Zipcode is required"),
    }),

    onSubmit: async (values: user) => {
      let data = { ...userInformation, ...values };
      setUserInformation(data);
      await dispatch(user_shipping_detail(data));
    },
    validateOnBlur: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ maxWidth: "80%", mx: "auto" }}>
        <Box sx={{ textAlign: "left", mt: 14 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ display: "inline-block", color: "#4F4F4F", fontWeight: 700 }}
          >
            Contact Information
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              fullWidth
              autoComplete="given-name"
              variant="standard"
              sx={{
                paddingBottom: 2,
              }}
              placeholder="AbdulBasit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.firstName}
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              fullWidth
              autoComplete="family-name"
              variant="standard"
              placeholder="Kagzi"
              sx={{
                paddingBottom: 2,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.lastName}
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address1"
              name="emailaddress"
              label="Email address"
              defaultValue={formik.values.emailaddress}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              sx={{
                paddingBottom: 2,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              InputProps={{
                readOnly: true,
              }}
              focused
            />
            {formik.errors.emailaddress && formik.touched.emailaddress ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.emailaddress}
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address2"
              name="phoneNumber"
              label="Phone Number"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.toString().slice(0, 10);
              }}
              value={formik.values.phoneNumber}
              fullWidth
              type="number"
              autoComplete="shipping address-line2"
              variant="standard"
              placeholder="+1-(0000 000 0000)"
              sx={{
                paddingBottom: 2,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.phoneNumber}
              </Box>
            ) : null}
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "left", mt: 10, mb: 4 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ display: "inline-block", color: "#4F4F4F", fontWeight: 700 }}
          >
            Delivery Information
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ display: "inherit" }}
            >
              <DesktopDatePicker
                label="Delivery Date"
                value={date_time}
                onChange={handleDate}
                disablePast={true}
                components={{ OpenPickerButton: DateRangeIcon as any }}
                sx={{
                  width: "500px",
                  ".MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "red",
                  },
                  ".MuiPickersDay-root": {
                    backgroundColor: "red",
                    borderRadius: 0,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ display: "inherit" }}
            >
              <TimePicker
                label="PickUp Time"
                value={date_time}
                disablePast={true}
                components={{ OpenPickerButton: AccessTimeIcon as any }}
                onChange={handleTime}
                sx={{ width: "500px" }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={4}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              City
            </InputLabel>
            <NativeSelect
              value={formik.values.city}
              inputProps={{
                name: "city",
                id: "uncontrolled-native",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="australia">Australia</option>
              <option value="india">India</option>
              <option value="unitedkingdom">United Kingdom</option>
            </NativeSelect>
            {formik.errors.city ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.city}
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              placeholder="Akshya Nagar 1st"
              sx={{
                paddingBottom: 2,
                marginTop: 1,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {formik.errors.address && formik.touched.address ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                {formik.errors.address}
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="zipcode"
              name="zipCode"
              label="Zip Code"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.toString().slice(0, 6);
              }}
              value={formik.values.zipCode}
              fullWidth
              type="number"
              autoComplete="zip code"
              variant="standard"
              placeholder="000000"
              sx={{
                paddingBottom: 2,
                marginTop: 1,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.zipCode && formik.touched.zipCode ? (
              <Box
                sx={{
                  background: "#f44336",
                  color: "#fff",
                  borderRadius: "8px",
                  p: 1,
                  mb: 3,
                }}
              >
                {formik.errors.zipCode}
              </Box>
            ) : null}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: { sm: "70%", xs: "100%" },
              height: "60px",
              backgroundColor: theme.palette.primary.contrastText,
              color: theme.palette.success.main,
              borderRadius: 0,
              mx: "auto",
              mt: { lg: 10, sm: 5 },
              textTransform: "capitalize",
              fontFamily: "Nunito",
              fontWeight: 700,
              fontSize: { md: 20, sm: 16 },
            }}
          >
            Procedd to Payment
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default UserInformation;
