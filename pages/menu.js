import Head from "next/head";
import { Nav, Footer } from "../app/components/modules";
import { Menu } from "../app/components/layouts";

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