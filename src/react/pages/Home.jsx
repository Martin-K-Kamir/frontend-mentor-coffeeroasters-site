import Cover from '../components/Cover';
import coverImg from '../../assets/home/image-home-cover.jpg';
import Card from '../components/Card';
import data from '../../data.js'
import Button from '../components/Button';


export default function Home() {
	return (<>
		<Cover coverImg={coverImg} hasBtn={true} href="/plan" title="Great coffee made simple." desc="Start your mornings with the world’s best coffees. Try our
				expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."/>

		<main className="">
			<section className="section--products">
				<div className="container">
					<h2 className="title-collection text-center">our collection</h2>
					<div className="switcher space-6 measure-8">
						{<Card data={data.products} modifier="card--thin"/>}
					</div>
				</div>
			</section>

			<section className="section--features">
				<div className="container half-surface text-neutral-1">
					<div className="stack space-fluid-3">
						<div className="wrap">
							<div className="text-center">
								<h2 className="title-3">Why choose us?</h2>
								<p className="description inline-center space-fluid-2 measure-5">
									A large part of our role is choosing which particular coffees will be featured
									in
									our
									range.
									This means working closely with the best coffee growers to give you a more
									impactful
									experience
									on every level.
								</p>
							</div>
						</div>
						<div className="wrap">
							<div className="switcher space-3 measure-8">
								{<Card data={data.features} modifier="card--bold"
								       utils="surface-primary radius-3"/>}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section--steps">
				<div className="container">
					<div className="wrap">
						<h2 className="title-4">How it works</h2>
					</div>
					<div className="wrap">
						<div className="progress-bar">
							<div className="progress-bar__point"></div>
							<div className="progress-bar__point"></div>
							<div className="progress-bar__point"></div>
						</div>
					</div>
					<div className="wrap">
						<div className="switcher">
							{<Card data={data.steps} modifier="card--thin"/>}
						</div>
					</div>
					<div className="wrap">
						<Button content="Create your plan" href={"/plan"}/>
					</div>
				</div>
			</section>
		</main>
	</>);
}

