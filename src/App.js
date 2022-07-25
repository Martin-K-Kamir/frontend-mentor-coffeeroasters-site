import {Route, Routes} from 'react-router-dom';

import Navbar from "./react/components/Navbar";
import Footer from "./react/components/Footer";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Plan from "./react/pages/Plan";


export default function App() {
	return (<>
		<Navbar/>

		<div className="stack space-fluid-6">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/plan" element={<Plan/>}/>
			</Routes>

			<Footer/>
		</div>
	</>);
}

