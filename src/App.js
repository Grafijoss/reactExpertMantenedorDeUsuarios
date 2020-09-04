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

	selectUser = id => {
		this.setState({
			ruta: 'formulario',
			userSelected: id
		})
	}

	newUser = () => {
		this.setState({
			ruta: 'formulario'
		})
	}

	addNewUser = usuario => {
		axios.post('https://jsonplaceholder.typicode.com/users', usuario)
			.then(({ data }) => {
				const newData = this.state.data.concat(data)
				this.setState({
					data: newData,
					ruta: 'lista'
				})
			})
	}

	handleUpdateUser = (id, values) => {
		axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
			.then(() => { 
				const newData = this.state.data.map(x => x.id === id ? values : x)
				this.setState({
					data: newData,
					ruta: 'lista'
				})
			}) 
	}

	render() {

		const { ruta, data, userSelected } = this.state
		const initialValues = userSelected && data.find(x => x.id === userSelected)

		return (
			<div className="App">
				{ruta === 'lista' && <ViewList
					handleNewUser={this.newUser}
					handleClick={this.selectUser}
					data={data}
				/>}
				{ruta === 'formulario' && <UserForm
					initialValues={initialValues || {}}
					handleSubmit={this.addNewUser}
					handleUpdate={this.handleUpdateUser}
				/>}
			</div>
		)
	}
}

export default App;
