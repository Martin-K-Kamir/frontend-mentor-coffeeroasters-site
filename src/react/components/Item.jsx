import {useEffect, useRef, useState} from 'react';

const ITEM_ROW_MIN_LIMIT = 432;
const ITEM_ROW_MAX_LIMIT = 542;

export default function Item(props) {
	const [itemWidth, setItemWidth] = useState(null);
	const itemClass = props.itemClass ? props.itemClass : '';
	const spaceClass = props.spaceClass ? props.spaceClass : 'space-1';
	const measureClass = props.measureClass ? props.measureClass : 'measure-4';

	useEffect(() => {
		setItemWidth(itemRef.current.clientWidth);
		const handleResize = () => {
			setItemWidth(itemRef.current.offsetWidth);
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const itemRef = useRef(null);

	function isRow(ifTrue, ifFalse) {
		return itemWidth >= ITEM_ROW_MIN_LIMIT && ITEM_ROW_MAX_LIMIT >= itemWidth ? ifTrue : ifFalse;
	}

	return (
		props.data.map(curItem => (
			<div className={`card item ${itemClass}`} key={curItem.id} ref={itemRef}>
				<div
					className={`card__content switcher ${spaceClass} ${measureClass}`}>
					<img className="card__image" src={`../assets/${curItem.dir}/${curItem.img}`} alt={curItem.alt}/>
					<div className={isRow('block-center', 'text-center')}>
						<h3 className="title-4">{curItem.title}</h3>
						<p className={`description space-1 ${isRow('', 'inline-center')}`}>{curItem.desc}</p>
					</div>
				</div>
			</div>
		))
	);
}