// Login.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';

class Login extends Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
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
		e.preventDeafault();
		const user = {
			email: this.state.email,
			password: this.state.password,
		}
		this.props.loginUser(user);
	}

	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.isAuthenticated) {
			this.props.history.push('/');
		}
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	render() {
		const {errors} = this.state;
		return(
			<div className="container" style={{ marginTop: '50px', width: '700px'}}>
				<h2 style={{marginBotton: '40px'}}>Login</h2>
				<form onSubmit={ this.handleSubmit }>
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
						placeholder="Password"
						className="form-control"
						name="password"
						onChange={ this.handleInputChange }
						value={ this.state.password }
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Login User
						</button>
					</div>
				</form>
			</div>
			)
	}
}

Login.PropTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)