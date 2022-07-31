export default function Button(props) {

	return (
		<>
			{props.href ?
				<a href={props.href} className="btn-primary" data-disabled={props.disabled}>{props.content}</a>
				:
				<button className="btn-primary" data-disabled={props.disabled}>{props.content}</button>}
		</>
	);
}