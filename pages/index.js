import Head from "next/head";
import { Nav, Footer, Category } from "../components/modules";
import {
  Hero,
  MobileApp,
  PopularMenu,
  PopularProducts,
  Testimonials,
} from "../components/templates";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Mama&apos;s Joint | Choose From Variety of Menu</title>
      </Head>
      <Nav />
      <Hero />
      <PopularProducts />
      <Category />
      <PopularMenu />
      <MobileApp />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
