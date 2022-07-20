import {useEffect, useRef, useState} from 'react';

// const CARD_ROW_MIN_LIMIT = 432;
// const CARD_ROW_MAX_LIMIT = 542;

export default function Card(props) {
	// const [cardWidth, setCardWidth] = useState(null);
	// const rowAllowed = props.rowAllowed ? props.rowAllowed : true;
	//
	// useEffect(() => {
	// 	setCardWidth(itemRef.current.clientWidth);
	// 	const handleResize = () => {
	// 		setCardWidth(itemRef.current.offsetWidth);
	// 	}
	// 	window.addEventListener('resize', handleResize);
	//
	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);
	//
	// const itemRef = useRef(null);
	//
	// function isRow(ifTrue, ifFalse) {
	// 	return cardWidth >= CARD_ROW_MIN_LIMIT && CARD_ROW_MAX_LIMIT >= cardWidth ? ifTrue : ifFalse;
	// }

	return (
		props.data.map(curItem => (
			<div className={`card ${props.modifier ? props.modifier : ''} ${props.utils ? props.utils : ''}`} key={curItem.id}>
				<div
					className={`card__content switcher`}>
					<img className="card__image" src={`../assets/${curItem.dir}/${curItem.img}`} alt={curItem.alt}/>
					<div className={`card__metadata`}>
						<h3 className="card__title title-4">{curItem.title}</h3>
						<p className={`card__description description`}>{curItem.desc}</p>
					</div>
				</div>
			</div>
		))
	);
}