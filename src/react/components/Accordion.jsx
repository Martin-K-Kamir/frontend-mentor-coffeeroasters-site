import React, {useState} from "react";

export default function Accordion(props) {

	const [isOpen, setIsOpen] = useState({
		preferences: true,
	});

	function  toggle(i) {
		setIsOpen({...isOpen, [i]: !isOpen[i]});
	}

	function renderItems(curGroup) {
		return (
			curGroup.item.map(curItem => (
				<li className="accordion__item" key={curItem.id}>
					<input className="accordion__input" type="radio" name={curGroup.tab} id={curItem.title}
					       value="test"/>
					<label className="accordion__card space-3 radius-3" htmlFor={curItem.title}>
						<h3 className="title-4 f-weight-3">{curItem.title}</h3>
						<p className="description space-1">{curItem.desc}</p>
					</label>
				</li>
			))
		)
	}

	return (
		<form action="#" className="accordion stack space-7">
			{props.data.map((curGroup, i) => (
				<div className="accordion__group" id={curGroup.tab} key={curGroup.id}>
					<header className="accordion__header" onClick={() => toggle(curGroup.tab)}>
						<h2 className="title-2 text-neutral-4">{curGroup.title}</h2>
						<svg className="accordion__arrow" data-open={isOpen[curGroup.tab]} width="24" height="24"
						     viewBox="0 0 19 11">
							<use href="assets/sprites.svg#arrow"/>
						</svg>
					</header>
					<ul className="accordion__list switcher measure-6 space-2" data-open={isOpen[curGroup.tab] ?? false}>
						{renderItems(curGroup)}
					</ul>
				</div>
			))}
		</form>
	);
}