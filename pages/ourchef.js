import Head from "next/head";
import { Chef } from "../app/components/layouts";
import { Nav, Footer } from "../app/components/modules";

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