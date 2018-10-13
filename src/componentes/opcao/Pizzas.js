import TelaInicial from '../TelaInicial';
import { Badge } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card,Container,CardImg,CardGroup,CardFooter,Input,Label,FormGroup } from 'reactstrap';

class Pizzas extends Component {
  constructor(props) {
    super(props);
    this.tamanhoPadrao = 24
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
      tamanhoLetra: this.tamanhoPadrao,
      classeContraste: 'semContraste'
    };
  }

  moficarFonte(valor){
  if(valor > 0 && this.state.tamanhoLetra < 40){
    this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
  }else if (valor < 0  && this.state.tamanhoLetra > 15){
    this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
  } else if(valor == 0){
    this.setState({tamanhoLetra: this.tamanhoPadrao});
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  moficarContraste(){
    if (this.state.classeContraste == "semContraste"){
      this.setState({classeContraste: "comContraste"});
    }else{
      this.setState({classeContraste: "semContraste"});
    }
  }

  render() {
    return (
      <div className= {this.state.classeContraste} >
        <div style={{background:'black'}}>
          <Button color="link" onClick = {() => this.moficarFonte(-2)}>Diminuir fonte</Button>
          <Button color="link" onClick = {() => this.moficarFonte(0)}>Fonte normal</Button>
          <Button color="link" onClick = {() => this.moficarFonte(2)}>Aumentar fonte</Button>
          <Button color="link" onClick = {() => this.moficarContraste()} style= {{float: "right"}}>Constraste</Button>
        </div>
        <TelaInicial/>
        <Container style={{padding:'10px',float:'center'}}> 


        <Button  color="primary" onClick={this.toggle}  style={{fontSize: (this.state.tamanhoLetra*0.66)+'px', marginBottom: '1rem' }}>Especificações</Button>
        <Button color="danger" style={{fontSize: (this.state.tamanhoLetra*0.66)+'px',float: 'right' }}>Finalizar</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <FormGroup style={{color:'black'}}>
              <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="BolosNumber">Quantidade:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="number" name="number" id="BolosNumber" placeholder="Digite a quantidade" />
            </FormGroup>
            <FormGroup style={{color:'black'}}>
              <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="BolosSelect">Tamanho:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="select" name="select" id="BolosSelect">
                <option>Médio</option>
                <option>Grande</option>
              </Input>
            </FormGroup>
            <FormGroup>
            <Button style={{fontSize: (this.state.tamanhoLetra*0.66)+'px'}} color="primary">+Carrinho</Button>
            </FormGroup>
            </CardBody>
          </Card>
        </Collapse>
        </Container>
        <div style={{padding:'10px'}}>
        <Container style={{padding:'10px'}}>
            <h2 style={{fontSize: (this.state.tamanhoLetra*2)+'px', marginTop:'20px'}}>Pizzas</h2>
            <CardGroup style={{marginTop:'20px'}}>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar pizza de calabresa" width="100%" src="http://www.guiamelhordocomercio.com.br/wp-content/uploads/2016/11/pizzaria-dom-augustinho-1024x640.jpg"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                          <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                            <Input  type="checkbox" id="checkbox2" />{' '}
                            Calabresa
                                  
                          </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar pizza de frango" width="100%" src="https://pizza10belem.com.br/wp-content/uploads/2017/10/PIZZA-DA-CASA-1024x640.jpg"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                        <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                          <Input  type="checkbox" id="checkbox2" />{' '}
                          Frango
                                
                        </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar pizza 4 queijos" width="100%" src="http://www.construarttis.com.br/wp-content/uploads/2015/10/untitled-1024x640.png"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                            <FormGroup check>
                              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                                <Input  type="checkbox" id="checkbox2" />{' '}
                                4 Queijos
                                
                              </Label>
                            </FormGroup>
                    </CardFooter>
                </Card>
            </CardGroup>
            </Container>
        </div>
      </div>
    );
  }
}

export default Pizzas;