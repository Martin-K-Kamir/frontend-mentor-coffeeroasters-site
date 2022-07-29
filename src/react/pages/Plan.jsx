import data from "../../data";
import img from '../../assets/plan/plan-cover.jpg';
import Cover from '../components/Cover';
import Steps from "../components/Steps";
import Feature from "../components/Feature";
import Accordion from "../components/Accordion";

export default function Plan() {
	return (<>
		<Cover coverImg={img} title="Create plan"
		       desc="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."/>

		<section>
			<div className="container box space-fluid-4">
				<div className="stack space-8">
					<div className="inline-center/tablet">
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
					<ul className="tabs font-serif f-size-4 f-weight-3">
						<li className="tabs__item" data-active="false"><a href="#preferences">Preferences</a></li>
						<li className="tabs__item" data-active="false"><a href="#beanType">Bean Type</a></li>
						<li className="tabs__item" data-active="false"><a href="#quantity">Quantity</a></li>
						<li className="tabs__item" data-active="false"><a href="#grindOption">Grind Option</a></li>
						<li className="tabs__item" data-active="false"><a href="#deliveries">Deliveries</a></li>
					</ul>

					<Accordion data={data.form}/>
				</div>
			</div>
		</section>
	</>);
}

