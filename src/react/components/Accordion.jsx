import React, {useState} from "react";

export default function Accordion(props) {
	const [isOpen, setIsOpen] = useState({
		preferences: true,
	});

	const [length, setLength] = useState(props.data.length);

	const [tab, setTab] = useState(props.data);


	function toggle(i,e) {
		console.log(e)
		setIsOpen({...isOpen, [i]: !isOpen[i]});
	}

	function renderItems(curGroup, i) {
		return (curGroup.item.map((curItem, key) => (
			<li className="accordion__item" key={curItem.id}>
				<input onClick={(e) => (
					window.scrollBy(0, 500),
					toggle(props.data[i <= length ? i += 1 : i].tab,e)
					)}
				       className="accordion__input" type="radio"
				       name={curGroup.tab} id={curItem.title}
				       value="test"/>
				<label className="accordion__card space-3 radius-3" htmlFor={curItem.title}>
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
				</label>
			</li>
		)))
	}

	return (<form action="#" className="accordion stack space-7">
		{props.data.map((curGroup, i) => (<div className="accordion__group" id={curGroup.tab} key={curGroup.id}>
			<header className="accordion__header" onClick={() => toggle(curGroup.tab)}>
				<h2 className="title-2 text-neutral-4">{curGroup.title}</h2>
				<svg className="accordion__arrow" data-open={isOpen[curGroup.tab]} width="24" height="24"
				     viewBox="0 0 19 11">
					<use href="assets/sprites.svg#arrow"/>
				</svg>
			</header>
			<ul className="accordion__list switcher measure-6 space-2"
			    data-open={isOpen[curGroup.tab] ?? false}>
				{renderItems(curGroup, i)}
			</ul>
		</div>))}
	</form>);
}