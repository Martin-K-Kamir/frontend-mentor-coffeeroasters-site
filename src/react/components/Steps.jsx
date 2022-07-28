export default function Steps(props) {
	return (
		<div className="steps" aria-hidden={true} style={{"--steps": props.data.length}}>
			{props.data.map((curStep) => <div className="steps__point" key={curStep.id}></div>)}
		</div>
	);
}