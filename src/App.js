import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./react/components/Navbar";
import Footer from "./react/components/Footer";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Plan from "./react/pages/Plan";
import ScrollToTop from "./react/ScrollToTop";
import React from "react";


export default function App() {
	return (
		<Router>
			<ScrollToTop>
				<Navbar/>

				<div className="app-container stack space-fluid-6" role="main">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/plan" element={<Plan/>}/>
					</Routes>

					<Footer/>
				</div>
			</ScrollToTop>
		</Router>
	);
}

