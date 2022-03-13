import Head from "next/head";
import { Nav, Footer, Category } from "../app/components/modules";
import { Hero, PopularMenu, PopularProducts } from "../app/components/templates";

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
			<Footer />
		</>
	);
};

export default LandingPage;