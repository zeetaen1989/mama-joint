import Head from "next/head";
import { Error } from "../components/layouts";
import { Footer, Nav } from "../components/modules";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404 Error: Page Not Found</title>
      </Head>
      <Nav />
      <Error />
      <Footer />
    </>
  )
}

export default ErrorPage;