import {useState} from "react";

export default function Button(props) {
	const [isLink, setIsLink] = useState(props.isLink);

	return (
		<>
			{isLink ?
				<a href={props.href} className="btn-primary">{props.content}</a>
				:
				<button className="btn-primary">{props.content}</button>}
		</>
	);
}