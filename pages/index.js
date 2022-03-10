import Head from "next/head";
import { Nav, Footer, Hero } from "../app/components/layouts";

const Home = () => {
	return (
		<>
			<Head>
				<title>FoodLab | Pizza Delivery Services</title>
				<meta
					name="description"
					content="This is a pizza delivery service application."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#000000" />
				<meta author="Pizza Delivery Services" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="nav" style={{ position: "relative", zIndex: "999" }}>
				<Nav />
			</div>
			<div className="hero" style={{ position: "absolute", zIndex: "1" }}>
				<Hero />
			</div>
			<Footer />
		</>
	);
};

export default Home;