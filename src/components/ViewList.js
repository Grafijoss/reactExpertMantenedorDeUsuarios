import React, { Component } from 'react'

import Header from './Header'
import List from './List'

export default class ViewList extends Component {
	render() {
		const { data, handleClick, handleNewUser } = this.props;
		return (
			<React.Fragment>
				<Header handleNewUser={handleNewUser} />
				<List
					data={data}
					handleClick={handleClick}
				/>
			</React.Fragment>
		)
	}
}