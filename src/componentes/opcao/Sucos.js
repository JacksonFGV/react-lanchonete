import TelaInicial from '../TelaInicial';
import { Badge } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card,Container,CardImg,CardGroup,CardFooter,Input,Label,FormGroup } from 'reactstrap';

class Sucos extends Component {
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
    } else if(valor===0){
      this.setState({tamanhoLetra: this.tamanhoPadrao});
    }
  }

  moficarContraste(){
    if (this.state.classeContraste==="semContraste"){
      this.setState({classeContraste: "comContraste"});
    }else{
      this.setState({classeContraste: "semContraste"});
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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
        <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="SucosNumber">Quantidade:</Label>
        <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="number" name="number" id="SucosNumber" placeholder="Digite a quantidade" />
      </FormGroup>
      <FormGroup style={{color:'black'}}>
        <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="SucosSelect">Tamanho:</Label>
        <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="select" name="select" id="SucosSelect">
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
      <h2 style={{fontSize: (this.state.tamanhoLetra*2)+'px', marginTop:'20px'}}>Sucos</h2>
            <CardGroup style={{marginTop:'20px'}}>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg width="100%" alt="Selecionar Suco de Melancia" src="https://boaformaesaude.com.br/wp-content/uploads/2016/04/suco-de-melancia-1-1024x640.jpg"  />
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                          <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                            <Input  type="checkbox" id="checkbox2" />{' '}
                            Melancia
                                  
                          </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg width="100%" alt="Selecionar Suco de Tomate" src="https://drjulianopimentel.com.br/wp-content/uploads/2016/12/suco-detox-tomate-1024x640.jpeg"  />
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                        <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                          <Input  type="checkbox" id="checkbox2" />{' '}
                          Tomate
                                
                        </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg width="100%"  alt="Selecionar Suco de laranja" src="data:image/jpeg;base64,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"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                            <FormGroup check>
                              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                                <Input  type="checkbox" id="checkbox2" />{' '}
                                Laranja
                                
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

export default Sucos;