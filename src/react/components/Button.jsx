import {Link} from 'react-router-dom'

export default function Button(props) {

	console.log(`${props.href}`)

	return (
		<>
			{props.href ?
				<Link to={`${props.href}`} className={props.secondary ? "btn-secondary" : "btn-primary"} data-disabled={props.disabled} onClick={props.handleClick}>{props.content}</Link>
				:
				<button className={props.secondary ? "btn-secondary" : "btn-primary"} data-disabled={props.disabled} onClick={props.handleClick}>{props.content}</button>}
		</>
	);
}
