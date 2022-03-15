import Head from "next/head";
import { Nav, Footer } from "../components/modules";
import { About } from "../components/layouts";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | The Food Platform</title>
      </Head>
      <Nav />
      <About />
      <Footer />
    </>    
  )
}

export default AboutPage;