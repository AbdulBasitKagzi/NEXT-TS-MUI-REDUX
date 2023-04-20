import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [save, setSave] = useState<string>();
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
