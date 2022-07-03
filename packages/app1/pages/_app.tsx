import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextApp from "next/app";

interface CustomProps extends AppProps {
  token?: string;
}

function MyApp({ Component, pageProps, token }: CustomProps) {
  console.log(token);
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (context: any) => {
  const {
    ctx: { req },
  } = context;
  const appProps = await NextApp.getInitialProps(context);
  const token: string = req?.cookies?.token || "";
  return { ...appProps, token };
};

export default MyApp;
