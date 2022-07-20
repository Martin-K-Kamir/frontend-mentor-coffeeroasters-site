import {useState} from "react";

export default function Button(props) {

	return (
		<>
			{props.href ?
				<a href={props.href} className="btn-primary">{props.content}</a>
				:
				<button className="btn-primary">{props.content}</button>}
		</>
	);
}