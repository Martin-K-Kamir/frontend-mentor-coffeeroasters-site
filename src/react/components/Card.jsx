export default function Card(props) {

	function renderImg(props) {
		if (props.imgType === 'png' || props.imgType === 'jpg') {
			return (<picture className="card__image">
				<source srcSet={`../assets/${props.dir}/${props.img}.webp`} type="image/webp"/>
				<source srcSet={`../assets/${props.dir}/${props.img}.${props.imgType}`}
				        type={`image/${props.imgType}`}/>
				<img loading="lazy" src={`../assets/${props.dir}/${props.img}.${props.imgType}`} alt={props.alt}
				     width={props.imgWidth} height={props.imgHeight}/>
			</picture>)
		}
		if (props.imgType === 'svg') {
			return (<img loading="lazy" className="card__icon" src={`../assets/${props.dir}/${props.img}.${props.imgType}`}
			             alt={props.alt} width={props.imgWidth} height={props.imgHeight}/>)
		}
	}

	return (props.data.map(curItem => (
		<div className={`card ${props.utils ? props.utils : ''}`} key={curItem.key}>
			<div className={`card__body ${props.switcherProps ? 'switcher ' + props.switcherProps : ''}`}>
				{renderImg(curItem)}

				<div className={`card__content`}>
					<h3 className={`card__title ${props.title ? props.title : ''}`}>{curItem.title}</h3>
					<p className="card__description description">{curItem.desc}</p>
				</div>
			</div>
		</div>)));
}