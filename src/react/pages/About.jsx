import Cover from '../components/Cover';
import coverImg from '../../assets/about/about-cover.jpg';
import Feature from '../components/Feature';
import data from "../../data";


export default function About() {

	return (<>
		<Cover coverImg={coverImg} title="About Us"
		       desc="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."/>

		<section>
			<div className="z-pattern stack space-fluid-6">
				<div className="container">
					<div className="even-columns measure-2 space-fluid-4">
						<picture>
							<source srcSet="assets/about/image-commitment.webp" type="image/webp"/>
							<source srcSet="assets/about/image-commitment.jpg" type="image/jpeg"/>
							<img className="radius-3" src="assets/about/image-commitment.jpg" width="506"
							     height="506"
							     alt="barista prepares coffee"/>
						</picture>

						<div className="block-center">
							<h2 className="title-3">Our commitment</h2>
							<p className="description space-3">We’re built on a simple mission and a
								commitment to doing good along the way. We want to make it easy for you to discover
								and
								brew the world’s best coffee at home. It all starts at the source. To locate the
								specific lots we want to purchase, we travel nearly 60 days a year trying to
								understand
								the challenges and opportunities in each of these places. We collaborate with
								exceptional coffee growers and empower.</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="even-columns measure-2 space-fluid-4">
						<picture>
							<source srcSet="assets/about/image-quality.webp" type="image/webp"/>
							<source srcSet="assets/about/image-quality.jpg" type="image/jpeg"/>
							<img className="radius-3" src="assets/about/image-quality.jpg" width="506" height="506"
							     alt="cup of coffee"/>
						</picture>
						<div className="block-center">
							<h2 className="title-3">Uncompromising quality</h2>
							<p className="description space-3 ">Although we work with growers who pay close
								attention to all stages of harvest and processing, we employ, on our end, a rigorous
								quality control program to avoid over-roasting or baking the coffee dry. Every bag
								of
								coffee is tagged with a roast date and batch number. Our goal is to roast
								consistent,
								user-friendly coffee, so that brewing is easy and enjoyable.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="container">
				<div className="stack space-8">
					<div className="inline-center/screen-md">
						<h2 className="title-4 text-neutral-4">Our headquarters</h2>
					</div>
					<div className="wrap">
						<div className="headquarters switcher space-5 measure-5">
							{<Feature data={data.headquarters} title="title-3"/>}
						</div>
					</div>
				</div>
			</div>
		</section>
	</>);
}

