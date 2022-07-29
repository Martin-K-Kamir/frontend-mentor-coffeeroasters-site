import Cover from '../components/Cover';
import coverImg from '../../assets/home/image-home-cover.jpg';
import Card from '../components/Card';
import Feature from "../components/Feature";
import data from '../../data.js'
import Button from '../components/Button';
import Steps from '../components/Steps';


export default function Home() {
	return (<>
		<Cover coverImg={coverImg} hasBtn={true} href="/plan" title="Great coffee made simple." desc="Start your mornings with the world’s best coffees. Try our
				expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."/>

		<section className="space-10">
			<div className="container">
				<h2 className="title-collection text-center">our collection</h2>

				<div className="wrap">
					<div className="products switcher space-6 measure-8">
						{<Feature data={data.products} title="title-4" switcherProps="measure-3 space-fluid-1"/>}
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="container box space-fluid-4 half-surface">
				<div className="stack">
					<h2 className="title-3 text-center">Why choose us?</h2>
					<p className="description space-2 text-center inline-center measure-5">
						A large part of our role is choosing which particular coffees will be featured in our range.
						This means working closely with the best coffee growers to give you a more impactful experience
						on every level.
					</p>

					<div className="wrap">
						<div className="service switcher space-3 measure-8">
							{<Card data={data.features} title="title-4" switcherProps="measure-3 space-fluid-3"/>}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="container">
				<div className="stack space-8">
					<div className="inline-center/tablet">
						<h2 className="title-4 text-neutral-4">How it works</h2>
					</div>

					<Steps data={data.steps}/>

					<div className="wrap">
						<div className="steps switcher space-5 measure-6">
							{<Feature data={data.steps} title="title-3"/>}
						</div>
					</div>

					<div className="inline-center/tablet">
						<Button content="Create your plan" href={"/plan"}/>
					</div>
				</div>
			</div>
		</section>
	</>);
}

