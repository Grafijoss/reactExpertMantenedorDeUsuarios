import React, { Component } from 'react'

const styles = {
	inline: {
		display: 'inline-block',
		verticalAlign: 'middle'
	}
}

export default class Header extends Component {


	render() {

		const { handleNewUser } = this.props

		return (
			<header>
				<h2 style={styles.inline}>Usuarios</h2>
				<button
					onClick={handleNewUser}
					style={styles.inline}
				>Nuevo usuario</button>
			</header>
		)
	}
}