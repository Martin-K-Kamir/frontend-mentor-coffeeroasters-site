export default function Feature(props) {


	function renderImg(props) {
		if (props.imgType === 'png' || props.imgType === 'jpg') {
			return (<picture className="feature__image">
				<source srcSet={`../assets/${props.dir}/${props.img}.webp`} type="image/webp"/>
				<source srcSet={`../assets/${props.dir}/${props.img}.${props.imgType}`}
				        type={`image/${props.imgType}`}/>
				<img src={`../assets/${props.dir}/${props.img}.${props.imgType}`} alt={props.alt}
				     width={props.imgWidth} height={props.imgHeight}/>
			</picture>)
		}
		if (props.imgType === 'svg') {
			return (<img className="feature__image" src={`../assets/${props.dir}/${props.img}.${props.imgType}`}
			             alt={props.alt} width={props.imgWidth} height={props.imgHeight}/>)
		}
	}

	return (props.data.map(curItem => (
		<div className={`feature ${props.utils ? props.utils : ''}`} key={curItem.key}>
			<div className={`feature__body ${props.isSwitcher ? 'switcher' : ''}`}>
				{curItem.img ? renderImg(curItem) : <div aria-hidden={true} className="feature__number">{`0${curItem.key}`}</div>}

				<div className={`feature__content`}>
					<h3 className={`feature__title ${props.title ? props.title : ''}`}>{curItem.title}</h3>
					{curItem.desc
						?
						<p className="feature__description description">{curItem.desc}</p>
						:
						<address className="feature__description description">
								{curItem.street}<br/>
								{curItem.city}<br/>
								{curItem.postcode}<br/>
								<a href={`tel:${curItem.phoneNum}`}>{curItem.phoneNum}<br/></a>
						</address>}
				</div>
			</div>
		</div>)));
}