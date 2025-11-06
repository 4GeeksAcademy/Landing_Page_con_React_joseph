import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import CardFinal from "../components/CardFinal.jsx";
import Footer from "../components/Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
		<Jumbotron/>
		<div className="container-fluid d-flex flex-row p-0">
			<div className="row m-auto mt-2">
			<CardFinal/>
			</div>
		</div>
		<Footer/>
		</div>

		
		
		
		
	

	
	);
};

export default Home;