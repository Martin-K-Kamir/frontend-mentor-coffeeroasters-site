export default function Steps(props) {
	return (
		<div className="steps">
			{props.length.map((curStep) => <div className="steps__point" key={curStep.id}></div>)}
		</div>
	);
}