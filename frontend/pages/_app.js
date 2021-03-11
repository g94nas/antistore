import NProgress from "nprogress";
import Layout from "../components/Layout";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import "../components/styles/nprogress.css";
import { CartStateProvider } from "../lib/cartState";

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
