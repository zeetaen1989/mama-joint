import Head from "next/head";
import { Nav, Footer, Hero } from "../app/components/layouts";

const Home = () => {

	const navStyle = {
		position: "relative",
		zIndex: "999",
	}

	const heroStyle = {
		position: "absolute",
		zIndex: "1",
		top: "1rem",
	}

	return (
		<>
			<Head>
				<title>FoodLab | Pizza Delivery Services</title>
z			</Head>
			<div className="nav" style={navStyle}>
				<Nav />
			</div>
			<div className="hero" style={heroStyle}>
				<Hero />
			</div>
			<Footer />
		</>
	);
};

export default Home;