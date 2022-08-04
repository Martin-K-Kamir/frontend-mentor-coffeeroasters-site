import React, {useState} from "react";

export default function Accordion(props) {
	const [data, setData] = useState(props.data);
	const [isOpen, setIsOpen] = useState({preferences: true});
	const [isChecked, setIsChecked] = useState({});
	const [isDisabled, setIsDisabled] = useState("");

	function handleOpening(id, e) {
		e.preventDefault();

		setIsOpen({...isOpen, [id]: !isOpen[id]});
	}

	function handleChecking(curGroup, i) {
		setIsOpen(prevOpen => ({...prevOpen, [curGroup.item[i].ref]: true}));
		setIsChecked(prevChecked => ({...prevChecked, [curGroup.key]: curGroup.item[i].key}));
		props.handleActiveTab(curGroup.id);
		props.handleOrder(curGroup, i);

		if (curGroup.key === 1) {
			if (curGroup.item[i].key === 1) {
				setIsDisabled("grindOption");
				setIsOpen(prevOpen => ({...prevOpen, ["grindOption"]: false}))
				setIsChecked(prevChecked => ({...prevChecked, [4]: false}));
				setData(data.map(cur => (cur.key === 3 ? {
					...cur,
					item: data[2].item.map(curItem => ({...curItem, ref: "deliveries"}))
				} : cur)));

				props.handleActiveTab(curGroup.id, true);
			} else {
				setIsDisabled("");
				setData(props.data)
			}
		}
	}

	function renderCards(curGroup) {
		return (curGroup.item.map((curItem, i) => (
			<li key={curItem.key} onClick={() => handleChecking(curGroup, i)}>
				<a className="card space-3" href={`#${curItem.ref}`}
				   data-checked={isChecked[curGroup.key] === curItem.key}>
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
					<span className="sr-only">Check the option and move to the next section</span>
				</a>
			</li>
		)))
	}

	return (
		<div className="accordion stack space-7">
			{data.map(curGroup => (
				<div className="accordion__item" id={curGroup.id} data-disabled={isDisabled === curGroup.id}
				     data-disabled-message={curGroup.disabledMsg} key={curGroup.key}>
					<h2 className="accordion__header title-2 text-neutral-4">
						<button onClick={e => handleOpening(curGroup.id, e)}>{curGroup.title}</button>
						<svg data-open={isOpen[curGroup.id]} width="24" height="24" aria-hidden={true}
						     viewBox="0 0 20 13">
							<use href="assets/sprites.svg#arrow"/>
						</svg>
					</h2>
					<ul className="accordion__body switcher measure-6 space-2" data-open={isOpen[curGroup.id] ?? false}>
						{renderCards(curGroup)}
					</ul>
				</div>
			))}
		</div>
	);
}