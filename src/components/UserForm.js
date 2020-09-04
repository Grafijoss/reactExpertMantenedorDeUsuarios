import React, { Component } from 'react'

const validate = values => {
	const errors = {}
	if (!values.name) {
		errors.name = 'This field is mandatory'
	}
	if (!values.email) {
		errors.email = 'This field is mandatory'
	}
	if (!values.website) {
		errors.website = 'This field is mandatory'
	}
	return errors
}


export default class UserForm extends Component {

	state = {
		errors: {}
	}

	constructor(props) {
		super(props)
		this.state = {
			...this.state,
			...props.initialValues
		}
	}

	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { errors, ...withOutErrors } = this.state
		const result = validate(withOutErrors)

		this.setState({ errors: result })

		if (!Object.keys(result).length) {
			const { handleSubmit, handleUpdate, initialValues } = this.props
			if (initialValues.id) {
				handleUpdate(initialValues.id, withOutErrors)
			} else {
				handleSubmit(withOutErrors)
			}
			console.log('se envia el formulario')
		} else {
			e.target.reset()
		}


	}

	render() {

		const { errors } = this.state
		const { initialValues } = this.props
		return (
			<form onSubmit={this.handleSubmit}>
				<input defaultValue={initialValues.name} placeholder="name" name="name" onChange={this.handleChange} />
				{errors.name && <p>{errors.name}</p>}
				<input defaultValue={initialValues.email} placeholder="email" name="email" onChange={this.handleChange} />
				{errors.email && <p>{errors.email}</p>}
				<input defaultValue={initialValues.website} placeholder="website" name="website" onChange={this.handleChange} />
				{errors.website && <p>{errors.website}</p>}
				<input type="submit" value="Send" />
			</form>
		)
	}
}