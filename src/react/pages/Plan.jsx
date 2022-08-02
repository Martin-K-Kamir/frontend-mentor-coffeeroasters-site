import data from "../../data";
import img from '../../assets/plan/plan-cover.jpg';
import Cover from '../components/Cover';
import Steps from "../components/Steps";
import Feature from "../components/Feature";
import Accordion from "../components/Accordion";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";
import Modal from "../components/Modal";
import React, {useEffect, useState} from "react";

export default function Plan() {
	const [tabActive, setTabActive] = useState({});
	const [order, setOrder] = useState({})
	const [orderLimit, setOrderLimit] = useState(5)
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (Object.keys(order).length >= orderLimit) {
			const allChecked = Object.values(order).every(Boolean);
			setBtnDisabled(!allChecked);

			if (order.grindOption === undefined && order.preferences !== "Capsule") {
				setBtnDisabled(true);
			}

			if (order.grindOption) {
				setBtnDisabled(false);
			}
		} else {
			setBtnDisabled(true);
		}
	}, [order, orderLimit])

	function handleActiveTab(id, isNotActive) {
		setTabActive(prevTabActive => ({...prevTabActive, [id]: true}));

		if (isNotActive) {
			setTabActive(prevTabActive => ({...prevTabActive, ["grindOption"]: false}));
		}
	}

	function handleOrder(curGroup, i) {
		setOrder(prevOrder => ({...prevOrder, [curGroup.id]: curGroup.item[i].title}));

		if (curGroup.item[i].title === "Capsule") {
			setOrderLimit(4)
			setOrder(prevOrder => {
				const copy = {...prevOrder};
				delete copy["grindOption"];
				return copy;
			});
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		setModalOpen(true);
	}

	return (<>
		<Cover coverImg={img} title="Create plan" desc="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."/>

		<section>
			<div className="container box space-fluid-4">
				<div className="stack space-8">
					<div className="inline-center/screen-md">
						<h2 className="title-4">How it works</h2>
					</div>

					<Steps data={data.steps}/>

					<div className="wrap">
						<div className="steps switcher space-5 measure-6">
							{<Feature data={data.steps} title="title-3"/>}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="container">
				<div className="sidebar space-fluid-4">
					<ul className="tabs f-serif f-size-4 f-weight-3">
						{data.form.map(curTab => {
							return <li key={curTab.key} className="tabs__item" data-active={tabActive[curTab.id]}><a
								href={`#${curTab.id}`}>{curTab.tab}</a></li>
						})}
					</ul>

					<form className="stack" onSubmit={e => handleSubmit(e)}>
						<Accordion data={data.form}
						           handleActiveTab={(id, isNotActive) => handleActiveTab(id, isNotActive)}
						           handleOrder={(curGroup, i) => handleOrder(curGroup, i)}
						/>

						<OrderSummary order={order} title={OrderSummary}/>

						<div className="wrap inline-end inline-center/screen-md">
							<Button content="Create my plan!" disabled={btnDisabled}/>
						</div>
					</form>
				</div>
			</div>
		</section>

		<Modal order={order} isOpen={modalOpen}/>
	</>);
}

