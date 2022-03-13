import Head from "next/head";
import { Nav, Footer } from "../app/components/modules";
import { About } from "../app/components/layouts";

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