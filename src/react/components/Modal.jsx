import OrderSummary from "./OrderSummary";
import Button from "./Button";
import React from "react";


export default function Modal(props) {

	function handleOutsideClick(e) {
			
		if (e.target.classList.contains("modal")) {
			props.handleOpenModal();
		}
	}

	return (
		<div className="modal" data-modal-open={props.isOpen} onClick={e => handleOutsideClick(e)}>
			<div className="modal__container">
				<div className="modal__body">
					<header className="modal__header">
						<h2 className="title-4 text-neutral-1">Order Summary</h2>
					</header>
					<div className="modal__content stack space-7">
						<OrderSummary order={props.order}/>
						<p className="description">Is this correct? You can proceed to checkout or go back to
							plan selection if something is off. Subscription discount codes can also be redeemed at the
							checkout. </p>
						<div className="btns space-3">
							<Button secondary={true} content="Go back" handleClick={props.handleOpenModal}/>
							<Button content="Checkout - $14.00 / mo"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}