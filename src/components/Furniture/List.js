import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
	renderCard() {
		const products = this.props.products;
		const columns = [];
		if (products) {
			const totalProducts = products.length;
			for(let i = 0; i < totalProducts; i++) {
				columns.push(<Card key={products[i]['name']} product={products[i]} />)
			}
		}
		return columns;
	}

	render() {
		return (
			this.renderCard()
		);
	}
}

export default List;