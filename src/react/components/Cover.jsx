import Button from './Button';

export default function Cover(props) {
	return (
		<div className="cover container container--aligned radius-3 darken-image"
		     style={{backgroundImage: `url(${props.coverImg})`}}>
			<h1 className="title-1 text-neutral-1">{props.title}</h1>
			<p className="description text-neutral-1">{props.desc}</p>
			{props.hasBtn && <Button content="Create your plan" href={props.href}/>}
		</div>
	);
}