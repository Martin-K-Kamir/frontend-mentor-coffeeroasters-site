import Logo from './Logo';
import {Link} from 'react-router-dom'


export default function Footer() {

	return (<footer className="footer">
		<div className="container surface-secondary radius-3">
			<div className="footer__container">

				<Logo isLight={true}/>

				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item"><Link to="/">home</Link></li>
						<li className="nav__item"><Link to="/about">about</Link></li>
						<li className="nav__item"><Link to="/plan">create your plan</Link></li>
					</ul>
					<ul className="nav__list">
						<li className="nav__item">
							<a target="_blank" rel="noreferrer" aria-label="author's website"
							   href="https://martinkamir.com/">
								<svg aria-hidden={true} width="29" height="29" viewBox="0 0 100 66">
									<use href="assets/sprites.svg#martinkamir"/>
								</svg>
							</a>
						</li>
						<li className="nav__item">
							<a target="_blank" rel="noreferrer" aria-label="author's github profile"
							   href="https://github.com/Martin-K-Kamir">
								<svg aria-hidden={true} width="24" height="24" viewBox="0 0 24 24">
									<use href="assets/sprites.svg#github"/>
								</svg>
							</a>
						</li>
						<li className="nav__item">
							<a target="_blank" rel="noreferrer" aria-label="author's linkedin profile"
							   href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/">
								<svg aria-hidden={true} width="24" height="24" viewBox="0 0 24 24">
									<use href="assets/sprites.svg#linkedin"/>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</footer>);
}
