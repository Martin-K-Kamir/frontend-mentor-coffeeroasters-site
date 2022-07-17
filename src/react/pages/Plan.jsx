import Cover from '../layouts/Cover';
import img from '../../assets/plan/plan-cover.jpg';

export default function Plan() {
	return (
		<Cover coverImg={img} title="Create plan"
		       desc="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."/>
	);
}

