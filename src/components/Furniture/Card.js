import React, { Component } from 'react';

class Card extends Component {
	render() {
		const product = this.props.product;
		const time = parseInt(product.delivery_time);
		const days = `${time} ${time > 1 ? 'Days' : 'Day'}`;
		const description = product.description.slice(0, 114) + "...";
		return (
			<div className="column-6">
			    <div className="card">
			      <h3>{product.name} <span className="product-price">IDR {product.price.toLocaleString()}</span></h3>
			      <p className="product-description">{description}</p>
			      <p className="product-style">{product.furniture_style.join(", ")}</p>
			      <div className="product-delivery-time">Delivery Time: {days}</div>
			    </div>
		  	</div>
		)
	}
}

export default Card;