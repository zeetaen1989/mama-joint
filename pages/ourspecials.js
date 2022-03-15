import Head from "next/head";
import { Specials } from "../components/layouts";
import { Nav, Footer } from "../components/modules";

const OurSpecialsPage = () => {
  return (
    <>
      <Head>
        <title>Our Specials | Our Daily Specials</title>
      </Head>
      <Nav />
      <Specials />
      <Footer />
    </>
  );
}

export default OurSpecialsPage;