import Cover from '../layouts/Cover';
import img from '../../assets/about/about-cover.jpg';

export default function About() {
	return (
		<Cover coverImg={img} title="About Us"
		       desc="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."/>
	);
}

