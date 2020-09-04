import React, { Component } from 'react'

import Header from './Header'
import List from './List'

export default class ViewList extends Component {
	render() {
		const { data } = this.props;
		return (
			<React.Fragment>
				<Header />
				<List data={data} />
			</React.Fragment>
		)
	}
}