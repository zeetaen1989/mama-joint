import Head from "next/head";
import { Locations } from "../app/components/layouts";
import { Nav, Footer } from "../app/components/modules";

const OurLocationsPage = () => {
  return (
    <>
      <Head>
        <title>Our Locations | You can find us in these locations</title>
      </Head>
      <Nav />
      <Locations />
      <Footer />
    </>
  );
}

export default OurLocationsPage;