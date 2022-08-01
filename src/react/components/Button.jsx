export default function Button(props) {

	return (
		<>
			{props.href ?
				<a href={props.href} className={props.secondary ? "btn-secondary" : "btn-primary"} data-disabled={props.disabled}>{props.content}</a>
				:
				<button className={props.secondary ? "btn-secondary" : "btn-primary"} data-disabled={props.disabled}>{props.content}</button>}
		</>
	);
}