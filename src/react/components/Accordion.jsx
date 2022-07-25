import React, {useState} from "react";

export default function Accordion() {

	const [isOpen, setIsOpen] = useState(false);

	function toggleList() {
		setIsOpen(!isOpen);
	}

	return (<form action="#" className="accordion">
			<div className="accordion__group" id="preferences">
				<header className="accordion__header" onClick={toggleList}>
					<h2 className="title-2 text-neutral-4">How do you drink your coffee?</h2>
					<svg className="accordion__arrow" aria-expanded={isOpen} width="24" height="24" viewBox="0 0 19 11">
						<use href="assets/sprites.svg#arrow"/>
					</svg>
				</header>
				<ul className="accordion__list switcher measure-6 space-2" aria-expanded={isOpen}>
					<li className="accordion__item">
						<input className="accordion__input" type="radio" name="Preferences" id="Capsule"
						       value="test"/>
						<label className="accordion__card space-3 radius-3" htmlFor="Capsule">
							<h3 className="title-4 f-weight-3">Capsule</h3>
							<p className="description space-1">Compatible with Nespresso systems and similar
								brewers</p>
						</label>
					</li>

					<li className="accordion__item">
						<input className="accordion__input" type="radio" name="Preferences" id="Filter"
						       value="test"/>
						<label className="accordion__card space-3 radius-3" htmlFor="Filter">
							<h3 className="title-4 f-weight-3">Filter</h3>
							<p className="description space-1">For pour over or drip methods like Aeropress,
								Chemex, and V60</p>
						</label>
					</li>

					<li className="accordion__item">
						<input className="accordion__input" type="radio" name="Preferences" id="Espresso"
						       value="test"/>
						<label className="accordion__card space-3 radius-3" htmlFor="Espresso">
							<h3 className="title-4 f-weight-3">Espresso</h3>
							<p className="description space-1">Dense and finely ground beans for an intense,
								flavorful experience</p>
						</label>
					</li>
				</ul>
			</div>
		</form>);
}