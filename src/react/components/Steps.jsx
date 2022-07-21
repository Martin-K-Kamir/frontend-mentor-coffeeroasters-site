export default function Steps(props) {

	console.log((185 - (185 / 100)) * 999)
	//calc((var(--measure, #{$author-default-measure}) - 100%) * 999);
	return (
		<div className="steps">
			{props.length.map(() => <div className="steps__point"></div>)}
		</div>
	);
}