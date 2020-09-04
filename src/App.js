import React, { Component } from 'react'

import ViewList from './components/ViewList'
import UserForm from './components/UserForm'


import './App.css';
import axios from 'axios'

class App extends Component {
	state = {
		data: [],
		ruta: 'lista' // lista o ruta
	}

	constructor() {
		super()
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => this.setState({ data }))
	}

	render() {

		const { ruta, data } = this.state

		return (
			<div className="App">
				{ruta === 'lista' && <ViewList data={data} />}
				{ruta === 'formulario' && <UserForm />}
			</div>
		)
	}
}

export default App;
