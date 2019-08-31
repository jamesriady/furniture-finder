import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			times: [
				{totalDay: 7, name: '1 week'},
				{totalDay: 14, name: '2 weeks'},
				{totalDay: 30, name: '1 month'},
				{totalDay: 0, name: 'more than 1 month'}
			] 
		}
	}

	render() {
		const props = this.props;
		const styles = props.furnitureStyle;
		return (
			<div className="filter-wrapper">
				<div className="filter-name">
					<input type="text" placeholder="Search Furniture" onChange={this.props.searchFurnitureByName} />
				</div>
				<div className="filter-style">
					<div className="dropdown">
					  <div className="dropbtn">{ props.selectedStyles.length > 0 ? props.selectedStyles.join(', ') : 'Furniture Style' }</div>
					  <div className="dropdown-content">
					  	{ styles && styles.map(x => <p key={x}>{x}<input type="checkbox" value={x} style={{float: 'right'}} onChange={this.props.searchFurnitureByStyle} /></p>)}
					  </div>
					</div>
				</div>
				<div className="filter-time">
					<div className="dropdown">
					  <div className="dropbtn">{ props.selectedTimes.length > 0 ? props.selectedTimes.join(', ') : 'Delivery Time' }</div>
					  <div className="dropdown-content">
					  	{ this.state.times.map(x => <p key={x.totalDay}>{x.name}<input type="checkbox" value={x.totalDay} style={{float: 'right'}} onChange={this.props.searchFurnitureByTime} /></p>)}
					  </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Filter;