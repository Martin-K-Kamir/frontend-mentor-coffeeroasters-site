import {Route, Routes} from 'react-router-dom';

import Navbar from "./react/components/Navbar";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Plan from "./react/pages/Plan";


export default function App() {
	return (
		<>
			<Navbar/>

			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/plan" element={<Plan/>}/>
			</Routes>
		</>
	);
}

