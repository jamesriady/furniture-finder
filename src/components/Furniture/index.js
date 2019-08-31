import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFunitures, filterByName, filterByStyles, filterByTimes } from '../../actions';
import Filter from './Filter';
import List from './List';
import '../../css/index.css'

function Loading(props) {
	return <h3 className="loading-indicator">Loading ...</h3>;
}

class Furniture extends Component {
	constructor(props) {
		super(props)
		this.combineStyles = this.combineStyles.bind(this)
		this.combineTimes = this.combineTimes.bind(this)
	}

	componentDidMount() {
		this.props.getFurnitures();
	}

	combineStyles(e) {
		const target = e.target;
		let arr = this.props.filterStyles.slice();
		if (target.checked) {
			arr.push(target.value)
		} else {
			arr = arr.filter(x => x !== target.value);
		}
		this.props.filterByStyle(arr);
	}

	combineTimes(e) {
		const target = e.target;
		let arr = this.props.filterTimes.slice();
		if (target.checked) {
			arr.push(target.value)
		} else {
			arr = arr.filter(x => x !== target.value);
		}
		this.props.filterByTime(arr);
	}

	render() {
		const loading = this.props.loading;
		return (
			<div className="wrapper">
				<div className="row">
					<Filter furnitureStyle={this.props.furniture['furniture_styles']} 
						searchFurnitureByName={(e) => this.props.filterByName(e.target.value)}
						searchFurnitureByStyle={this.combineStyles}
						searchFurnitureByTime={this.combineTimes}
						selectedStyles={this.props.filterStyles}
						selectedTimes={this.props.filterTimes}
						 />
					{ loading ? <Loading /> : <List products={this.props.products} /> }
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	let products = state.furniture.products;
	if (state.filterName !== '') {
		products = products.filter(x => x['name'].match(state.filterName));
	}
	if (state.filterStyles.length > 0) {
		products = products.filter(product => product['furniture_style'].some(x => state.filterStyles.indexOf(x) > -1));
	}
	if (state.filterTimes.length > 0) {
		const selectedTimes = state.filterTimes.map(x => parseInt(x));
		if (!selectedTimes.includes(0)) {
			products = products.filter(product => selectedTimes.some(x => parseInt(product['delivery_time']) <= x));
		}
	}

	return {
	    furniture: state.furniture,
	    loading: state.loading,
	    products: products,
	    filterStyles: state.filterStyles,
	    filterTimes: state.filterTimes
	}
}


const mapDispatchToProps = (dispatch, props) => ({
  getFurnitures: () => dispatch(fetchFunitures()),
  filterByName: (name) => dispatch(filterByName(name)),
  filterByStyle: (arr) => dispatch(filterByStyles(arr)),
  filterByTime: (arr) => dispatch(filterByTimes(arr))
})

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);