// Register.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

class Register extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			password_confirm: '',
			errors: {}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.username]: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			password_confirm: this.state.password_confirm
		}
		this.props.registerUser(user, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	render() {
		return(
		<div className="container" style={{ marginTop: '50px', width: '700px'}}>
			<h2 style={{marginBotton: '40px'}}>Registration</h2>
			<form onSubmit={ this.handleSubmit }>
				<div className="form-group">
					<input
					type="text"
					placeholder="Username"
					className="form-control"
					name="username"
					onChange={ this.state.name }
					value={ this.state.name }
					/>
				</div>
				<div className="form-group">
					<input
					type="email"
					placeholder="Email"
					className="form-control"
					name="email"
					onChange={ this.handleInputChange }
					value={ this.state.email }
					/>
				</div>
				<div className="form-group">
					<input
					type="password"
					placeholder="Confirm Password"
					className="form-control"
					name="password_confirm"
					onChange={ this.handleInputChange }
					value={ this.state.password_confirm }
					/>
				</div>/
				<div className="form-group">
					<button type="submit" className="btn btn-primary">
						Registrar Usuário
					</button>
				</div>
			</form>
		</div>
		)
	}
}

Register.PropTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register))