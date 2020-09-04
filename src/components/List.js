import React, { Component } from 'react'

export default class List extends Component {

	handleClick = id => e => {
		console.log(id)
	}

	handleClick2 = ({ target }) => {
		console.log(target.getAttribute('data-id'))
	}

	render() {

		const { data } = this.props

		return (
			<ul>
				{data.map(x =>
					<li key={x.id}>
						{x.name}
						{/* <button onClick={this.handleClick(x.id)}>Editar</button> */}
						<button data-id={x.id} onClick={this.handleClick2}>Editar</button>
					</li>
				)}
			</ul>
		)
	}
}