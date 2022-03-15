import Head from "next/head";
import { Nav, Footer } from "../components/modules";
import { Menu } from "../components/layouts";

const MenuPage = () => {
  return (
    <>
      <Head>
        <title>Menu | Our Food Menu</title>
      </Head>
      <Nav />
      <Menu />
      <Footer />
    </>
  )
}

export default MenuPage;