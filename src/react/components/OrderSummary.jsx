import React from "react";

export default function OrderSummary(props) {

	function renderElement(str) {
		return <span className="text-primary no-wrap">{str ? str : "____"}</span>;
	}

	function renderOption(str) {
		return renderElement(str);
	}

	return (
		<div className="order-summary">
			{props.title && <h2 className="order-summary__title f-weight-1">Order Summary</h2>}
			<p className="order-summary__description f-serif f-size-4 f-weight-3">
				I drink my coffee {props.order.preferences === "Capsule" ? "using " : "as "}
				{renderOption(props.order.preferences)},
				with a {renderOption(props.order.beanType)}{" "}
				type of bean. {renderOption(props.order.quantity)}
				{props.order.preferences === "Capsule" ? "" : " ground ala "}
				{props.order.preferences === "Capsule" ? "" : renderOption(props.order.grindOption)},
				sent to me {renderOption(props.order.deliveries)}.
			</p>
		</div>
	);
}