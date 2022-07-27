import React, {useState} from "react";

export default function Accordion(props) {
	const [isOpen, setIsOpen] = useState({
		preferences: true,
	});

	const [isChecked, setIsChecked] = useState({});
	const [card, setCard] = useState(null);

	function toggle(i, e) {
		const clickOn = e.currentTarget.getAttribute('data-click');

		if (clickOn === 'card') {
			setIsOpen({...isOpen, [i]: true});
		}
		if (clickOn === 'button') {
			setIsOpen({...isOpen, [i]: !isOpen[i]});
		}
	}

	function handleCheck(i, index) {
		setIsChecked({...isChecked, [i.key]: i.item[index].key});

	}


	function renderItems(curGroup) {
		return (curGroup.item.map((curItem, index) => (
			<li className="accordion__item" key={curItem.key} onClick={(e) => (toggle(curItem.ref, e), handleCheck(curGroup, index))} data-click="card"
			    data-checked={isChecked[curGroup.key] == curItem.key} value={curItem.key}>
				<a href={`#${curItem.ref}`} className="accordion__card space-3 radius-3">
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
				</a>
			</li>)))
	}

	return (<form action="#" className="accordion stack space-7">
		{props.data.map(curGroup => (<div className="accordion__group" id={curGroup.id} key={curGroup.key}>
			<header className="accordion__header" onClick={(e) => toggle(curGroup.id, e)} data-click="button">
				<h2 className="title-2 text-neutral-4">{curGroup.title}</h2>
				<svg className="accordion__arrow" data-open={isOpen[curGroup.id]} width="24" height="24"
				     viewBox="0 0 19 11">
					<use href="assets/sprites.svg#arrow"/>
				</svg>
			</header>
			<ul className="accordion__list switcher measure-6 space-2"
			    data-open={isOpen[curGroup.id] ?? false}>
				{renderItems(curGroup)}
			</ul>
		</div>))}
	</form>);
}