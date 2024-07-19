// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href='/login'
  }
}

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          emailaddress: "",
          password: "",
          //terms: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
      }
      render() {
        return (
          

          <div className="container" style={{backgroundColor: "#3C6C84"}}>

          //   <Provider store = { store }>
          //     <Router>
          //       <div>
          //         <Navbar />
          //           <Route exact path="/" component={ Home } />
          //           <div className="container">
          //             <Route exact path="/register" component={ Register } />
          //             <Route exact path="/login" component={ Login } />
          //           </div>
          //       </div>
          //     </Router>
          //   </Provider>
            
            <div className="text-center">
                <img src="img/logo__smartmentor.png" classiName="img-fluid" width="40%" height= "auto"/>   
            </div> 
            
            <div className="text-center"> 
               <p className="text-center" >Uma ferramenta de governança para unir empreendedores e investidores em tempo real. Acompanhe as métricas e busce os melhores resultados com seus parceiros!</p> 
            </div>
            
            <div className="text-center">
              <img src="img/img2.png" classiName="img-fluid" width="85%" height= "auto"/> 
            </div> 
            
            <div className="column is-9 ">
              <br></br>
                
              <form className="form" onSubmit={this.handleSubmit}>   
                   
                <div className="col-md-4 offset-md-4 form-group row">
                  <input
                    className="form-control"
                    type="email"
                    name="emailaddress"
                    placeholder="E-MAIL"
                    value={this.state.emailaddress}
                    onChange={this.handleChange}
                  />
                </div> 
                  
                <div className="col-md-4 offset-md-4 form-group row">
                  <input
                    className="form-control"
                    placeholder="SENHA"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                  
                <p className="text-center">Esqueci minha senha</p>
                  
                <div className="btns">
                    
                  <div className="col-13 text-center">
                    <button type="submit" className="btn btn-primary mr-4">CONECTAR</button> 
                    <button className="btn btn-primary mr-6" type="submit" href="/login">LOGIN>></button>
                  </div>
                  
                </div>
                  

                <br></br> 
                  
                <div className="text-center">  
                   <img href="/register" src="img/btn1.png" className="img-fluid" width="25%" height= "auto"/>
                </div> 
                  
                <br></br>
                <br></br>

              </form>
                
            </div>
            
          </div>
          

        );
    }
}  
export default App;