import Cover from '../layouts/Cover';
import coverImg from '../../assets/home/image-home-cover.jpg';
import data from '../../data.js'


export default function Home() {

	function renderCards(data) {
		return data.map(curProduct => {
			return (<div className="card" key={curProduct.key}>
				<div className="switcher space-1 measure-3">
					<img src={`../assets/home/${curProduct.img}`} alt={curProduct.alt}/>
					<div className="block-center">
						<h3 className="title-4">{curProduct.title}</h3>
						<p className="description">{curProduct.desc}</p>
					</div>
				</div>
			</div>)
		});
	}

	// const renderFeatures = data.features.map(curFeature => {
	// 	`<div className="features__card" key={curFeature.key}>
	// 		<div className="wrap stack space-2">
	// 			<img src={curFeature.img} alt={curFeature.alt}/>
	// 			<div className="">
	// 				<h3 className="title-4">{curFeature.title}</h3>
	// 				<p className="description">{curFeature.desc}</p>
	// 			</div>
	// 		</div>
	// 	</div>`
	// });

	return (<div className="stack space-fluid-3">
		<Cover coverImg={coverImg} hasBtn={true} href="/plan" title="Great coffee made simple." desc="Start your mornings with the world’s best coffees. Try our
				expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."/>

		<main className="stack">
			<section className="container">
				<h2 className="title-collection text-center">our collection</h2>
				<div className="switcher space-6 measure-6">
					{renderCards(data.products)}
				</div>
			</section>

			<section className="container  ">
				<div className="inline-center text-center text-neutral-1">
					<h2 className="title-3">Why choose us?</h2>
					<p className="description">
						A large part of our role is choosing which particular coffees will be featured in our
						range.
						This means working closely with the best coffee growers to give you a more impactful
						experience
						on every level.
					</p>
				</div>
				<div className="switcher space-3">
					{renderCards(data.features)}
				</div>
			</section>
		</main>
	</div>);
}

