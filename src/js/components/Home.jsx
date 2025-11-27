
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import {Hero} from "./Hero.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cardlist } from "./Cardlist.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div style= {{margin: "20px 20px"}}>
				<Jumbotron/>
				</div>
			<Cardlist/>
			<Hero />
			<Footer/>
		</div>
	);
};

export default Home;