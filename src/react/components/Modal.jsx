import OrderSummary from "./OrderSummary";
import Button from "./Button";
import {useWindowDimensions} from "../Hooks";

import React from "react";


export default function Modal(props) {
	const {height, width} = useWindowDimensions();

	return (
		<div className="modal">
			<div className="modal__container">
				<header className="modal__header">
					<h2 className="title-4 text-neutral-1">Order Summary</h2>
				</header>
				<div className="modal__body stack space-7">
					<OrderSummary order={props.order}/>
					<p className="description">Is this correct? You can proceed to checkout or go back to
						plan selection if something is off. Subscription discount codes can also be redeemed at the
						checkout. </p>
					<div className="modal__cta space-3">
						<p className="title-4">$14.00 / mo</p>
						<Button content={width > 600 ? "Checkout" : "Checkout - $14.00 / mo"}/>
					</div>
				</div>
			</div>
		</div>
	);
}