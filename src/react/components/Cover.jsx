import Button from './Button';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function Cover(props) {
	const coverImage = `../assets/${props.coverImage}/image-${props.coverImage}-cover.${isWebpSupported() ? 'webp' : 'jpg'}`;

	return (
		<div className="cover container box darken-image" role="banner"
		     style={{backgroundImage: `url(${coverImage})`}}>
			<h1 className="title-1 text-neutral-1">{props.title}</h1>
			<p className="description text-neutral-1">{props.desc}</p>
			{props.hasBtn && <Button content="Create your plan" href={`${props.href}`}/>}
		</div>
	);
}