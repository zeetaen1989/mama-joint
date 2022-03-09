import Head from "next/head";
import Image from "next/image";

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
			<body>
				<h1 className="text-3xl font-bold underline">
					Hello World!
				</h1>
			</body>
			{/* <Hero /> */}
		</>
	);
};

export default Home;
