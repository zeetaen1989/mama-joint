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
        <title>FoodLab | Pizza Delivery Services</title>
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