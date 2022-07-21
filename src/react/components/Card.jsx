export default function Card(props) {
	return (
		props.data.map(curItem => (
			<div className={`card ${props.type ? 'card--type-' + props.type : ''} ${props.utils ? props.utils : ''}`}
			     key={curItem.id}>
				<div className={`card__content switcher`}>
					{curItem.img ?
						<img className="card__image" src={`../assets/${curItem.dir}/${curItem.img}`} alt={curItem.alt}/>
						:
						<div
							className="card__number">{`0${curItem.id}`}</div>
					}
					<div className={`card__metadata`}>
						<h3 className="card__title ">{curItem.title}</h3>
						<p className={`card__description description`}>{curItem.desc}</p>
					</div>
				</div>
			</div>
		))
	);
}