import Logo from './Logo';
import {useState} from "react";
import {Link} from 'react-router-dom'


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<header className="navbar">
			<Logo/>

			<button className="navbar__hamburger" aria-controls="navigation" onClick={toggleMenu}>
				{isOpen ? <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z"
						fill="#333D4B" fillRule="evenodd"/>
				</svg> : <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
						fill="#333D4B" fillRule="evenodd"/>
				</svg>}
				<span className="sr-only">menu</span>
			</button>

			<nav className="navbar__menu" data-menu-open={isOpen}>
				<ul className="navbar__menu-list">
					<li onClick={toggleMenu} className="navbar__item"><Link to="/">home</Link></li>
					<li onClick={toggleMenu} className="navbar__item"><Link to="/about">about</Link></li>
					<li onClick={toggleMenu} className="navbar__item"><Link to="/plan">create your plan</Link></li>
				</ul>
			</nav>
		</header>
	);
}