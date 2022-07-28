import React, {useState} from "react";

export default function Accordion(props) {
	const [isOpen, setIsOpen] = useState({preferences: true});
	const [isChecked, setIsChecked] = useState({});

	function handleOpening(id) {
		setIsOpen({...isOpen, [id]: !isOpen[id]});
	}

	function handleChecking(curGroup, i) {
		setIsOpen({...isOpen, [curGroup.item[i].ref]: true});
		setIsChecked({...isChecked, [curGroup.key]: curGroup.item[i].key});
	}

	function renderCards(curGroup) {
		return (curGroup.item.map((curItem, i) => (
			<li key={curItem.key} onClick={() => handleChecking(curGroup, i)}>
				<a className="card2 space-3 radius-3" aria-labelledby={`scroll down to ${curItem.ref} section`} href={`#${curItem.ref}`}
				   data-checked={isChecked[curGroup.key] === curItem.key}>
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
				</a>
			</li>
		)))
	}

	return (
		<form action="#" className="accordion stack space-7">
			{props.data.map(curGroup => (
				<div className="accordion__item" id={curGroup.id} key={curGroup.key}>
					<h2 className="accordion__header title-2 text-neutral-4" onClick={() => handleOpening(curGroup.id)}>
						<button onClick={e => e.preventDefault()}>{curGroup.title}</button>
						<svg data-open={isOpen[curGroup.id]} width="24" height="24"
						     viewBox="0 0 19 11">
							<use href="assets/sprites.svg#arrow"/>
						</svg>
					</h2>
					<ul className="accordion__body switcher measure-6 space-2" data-open={isOpen[curGroup.id] ?? false}>
						{renderCards(curGroup)}
					</ul>
				</div>
			))}
		</form>
	);
}