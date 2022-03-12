import Head from "next/head";
import { Nav,  Footer } from "../app/components/layouts";
import { Hero, PopularProducts, ProductTypes } from "../app/components/templates";

const LandingPage = () => {

	return (
		<>
			<Head>
				<title>FoodLab | Pizza Delivery Services</title>
			</Head>
			<Nav />
			<Hero />
			<PopularProducts />
			<ProductTypes />
			<Footer />
		</>
	);
};

export default LandingPage;