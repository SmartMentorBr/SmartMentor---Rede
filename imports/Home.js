import React, {Component} from 'react';
import { Container, Row, Col, CardBody, Card, UncontrolledCollapse } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
      render() {
        return (
          <div  style={{backgroundColor: "#c7d3e4", width:"100%"}}>
            <div className="text-center" style={{backgroundColor: "#00657f", width:"100%"}}>
             <img src="img/logo__smartmentor.png" width="10%" height= "auto"/>
            </div>
            
            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  
                  <li className="nav-item active text-center">
                    <a className="maisLuz" href="#">
                     <img src="img/atividades.png" width="40" height="35"/>
                    </a>
                    <a className="nav-link text-white" href="#">PROJETOS <span className="sr-only">(current)</span></a>
                  </li>
                  
                  <li className="nav-item active text-center">
                    <a className="maisLuz" href="#">  
                     <img src="img/empresas.png" width="40" height="35"/>
                    </a>
                    <a className="nav-link text-white" href="#">EMPRESAS</a>
                  </li>

                  <li className="nav-item active text-center">
                  <a className="maisLuz" href="#">
                    <img src="img/investimentos.png" width="40" height="35"/>
                  </a>  
                    <a className="nav-link text-white" href="#">MENTORIAS</a>
                  </li>
                  <div className="view overlay hm-white-slight-z-depth-1-half">
                  <li className="nav-item active text-center">
                      <a className="maisLuz" href="#">
                        <img src="img/rep.png" width="40" height="35"/>
                      </a>
                      <a className="nav-link text-white" href="#">REPORTS</a>
                      <div className="mask"></div>
                    
                  </li>
                  </div>
              
                    <li className="nav-item text-center">
                      <a  className="maisLuz" href="#">
                        <img src="img/arquivos.png" width="40" height="35"/>
                      </a> 
                      <a className="nav-link text-white" href="#">ARQUIVOS</a>
                    </li>
                                    
                  <li className="nav-item active text-center">
                    <a className="maisLuz" href="#">
                     <img src="img/perfil.png" width="40" height="35"/>
                    </a>
                    <a className="nav-link text-white" href="#" >PERFIL</a>
                  </li>     
                </ul>
              </div>
            </nav>
            <br></br>
            <div>
              <div className="visible">
              <img src="img/pesquisa.png" id="toggler0" width="3%" height="auto"/>
              
              </div>
              <UncontrolledCollapse toggler="#toggler0">
                <Card className="card w-50" style={{backgroundColor:"#c7d3e4"}}>
                  <CardBody>
                    <input
                      className="form-control"
                      type="pesquisa"
                      name="pesquisatema"
                      placeholder="PESQUISA"
                      value={this.state.nomeCadastro}
                      onChange={this.handleChange}
                    />        
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <br></br>
              <div className="visible">
              <img src="img/expansao.png" width="3%" height="auto"/>
              </div>
              <br></br>
              <div className="visible">
              <img src="img/pen.png" width="3%" height="auto"/>
              </div>
            </div>
            <br></br>
            
            <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <img className="item" src="img/unova.png" id="toogler1" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toogler1">
                        <Card>
                          <CardBody>
                          <h4 className="text-black">Consultoria em Inovação</h4>
                          
                          <a className="text-dark" id="links" style={{fontSize:"20"}}>www.unova.me</a>
                          <p className="text-dark">Somos uma Consultoria de Inovação em Negócios e viemos ao mercado
                          para atuar junto a empresas com propostas inovadoras que buscam acelerar
                          e/ou otimizar o seu processo de maturidade no negócio, potencializando o seu
                          processo de maturidade no negócio, potencializando seu retorno junto aos inestidores.</p>
                          
                            <button className="btn btn-primary mr-2" type="button">DÚVIDAS?</button>
                            <button className="btn btn-primary mr-2" type="button">REPORTS</button>
                            
                            <button className="btn btn-info mt-2" type="button">QUERO INVESTIR!</button>   
                   
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                  </div>  
                  <div className="col">
                    <img className="item" src="img/smartmentor.png" id="toggler2" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </div>
                    <div className="col">  
                    <img className="item" src="img/buzztrends.png" id="toggler5" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler5">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </div>
                  </div>


                  <div className="row">
                  <div className="col">
                    <img className="item" src="img/unova.png" id="toggler3" width="300px" height="auto"/>
                    <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                  </div>
                    <div className="col">
                      <img className="item" src="img/smartmentor.png" id="toggler4" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler4">
                          <Card>
                            <CardBody>
                                <h5>Vamos selecionar</h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                    </div>
                    <div className="col">
                      <img className="item" src="img/buzztrends.png" id="toggler7" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler7">
                          <Card>
                            <CardBody>
                              <h5>Vamos selecionar</h5>
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
                

                <div className="row">
                  <div className="col">
                    <img className="item" src="img/unova.png" id="toggler8" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler8">
                          <Card>
                            <CardBody> 
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                  </div>  
                  <div className="col">
                      <img className="item" src="img/smartmentor.png" id="toggler9" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler9">
                          <Card>
                            <CardBody>
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>      
                  </div>
                  <div className="col">     
                        <img className="item" src="img/buzztrends.png" id="toggler10" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#toggler10">
                          <Card>
                            <CardBody>  
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                  </div>
                </div>


                <div className="row">
                  <div className="col">
                    <img className="item" src="img/unova.png" id="togglerA" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#togglerA">
                          <Card>
                            <CardBody> 
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                  </div>  
                  <div className="col">
                      <img className="item" src="img/smartmentor.png" id="togglerB" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#togglerB">
                          <Card>
                            <CardBody>
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>      
                  </div>
                  <div className="col">     
                        <img className="item" src="img/buzztrends.png" id="togglerC" width="300px" height="auto"/>
                      <UncontrolledCollapse toggler="#togglerC">
                          <Card>
                            <CardBody>  
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt magni.
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                  </div>
                </div>
                
          </div>
          <br></br>
         </div>   
      );
    }
}  
export default Home;
  