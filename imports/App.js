import React, {Component} from 'react';

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
                  <button className="btn btn-primary mr-6" type="submit">LOGIN>></button>
              </div>
              </div>
              <br></br> 
              <div className="text-center">
                 <img src="img/btn1.png" classiName="img-fluid" width="25%" height= "auto"/>   
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
  