import Head from "next/head";
import { Nav, Hero, PopularProducts, Footer, } from "../app/components/layouts";

const LandingPage = () => {

	return (
		<>
			<Head>
				<title>FoodLab | Pizza Delivery Services</title>
			</Head>
			<Nav />
			<Hero />
			<PopularProducts />
			<Footer />
		</>
	);
};

export default LandingPage;