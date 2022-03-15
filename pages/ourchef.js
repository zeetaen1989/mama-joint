import Head from "next/head";
import { Chef } from "../components/layouts";
import { Nav, Footer } from "../components/modules";

const OurChefPage = () => {
  return (
    <>
      <Head>
        <title>Our Chef | Inspirations from our Chef</title>
      </Head>
      <Nav />
      <Chef />
      <Footer />
    </>
  );
}

export default OurChefPage;