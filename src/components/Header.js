import React, { Component } from 'react'

const styles = {
	inline: {
		display: 'inline-block',
		verticalAlign: 'middle'
	}
}

export default class Header extends Component {
	render() {
		return (
			<header>
				<h2 style={styles.inline}>Usuarios</h2>
				<button style={styles.inline}>Nuevo usuario</button>
			</header>
		)
	}
}