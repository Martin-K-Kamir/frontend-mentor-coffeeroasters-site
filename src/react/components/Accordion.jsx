import React, {useState} from "react";

export default function Accordion(props) {
	const [isOpen, setIsOpen] = useState({
		preferences: true,
	});

	const [isChecked, setIsChecked] = useState(false)

	function toggle(i, e) {
		const clickOn = e.currentTarget.getAttribute('data-click');
		const card = e.currentTarget.getAttribute('data-checked');

		if (clickOn === 'card') {
			setIsOpen({...isOpen, [i]: true});
			setIsChecked(!isChecked);
		}
		if (clickOn === 'button') {
			setIsOpen({...isOpen, [i]: !isOpen[i]});
		}
	}

	function toggleChecked() {
		return isChecked;
	}


	function renderItems(curGroup) {
		return (curGroup.item.map((curItem, key) => (
			<li className="accordion__item" key={curItem.key} onClick={(e) => toggle(curItem.ref, e)} data-click="card" data-checked={toggleChecked()}>
				<a href={`#${curItem.ref}`} className="accordion__card space-3 radius-3">
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
				</a>
			</li>
		)))
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