import TelaInicial from '../TelaInicial';
import { Badge } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card,Container,CardImg,CardGroup,CardFooter,Input,Label,FormGroup } from 'reactstrap';
import { getTamanho, setTamanho, getContraste, setContraste } from "../../DadosTemporarios";

class Doces extends Component {
  constructor(props) {
    super(props);
    this.tamanhoPadrao = 24;
    this.toggle = this.toggle.bind(this);
		this.state = { collapse: false,
			tamanhoLetra: this.tamanhoPadrao,
      classeContraste: getContraste()
    };
  }

  moficarFonte(valor){
    if(valor > 0 && this.state.tamanhoLetra < 40){
			this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
			setTamanho(this.state.tamanhoLetra+valor);
		}else if (valor < 0  && this.state.tamanhoLetra > 15){
			this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
			setTamanho(this.state.tamanhoLetra+valor);
		}else if(valor == 0){
			this.setState({tamanhoLetra: this.tamanhoPadrao});
			setTamanho(this.state.tamanhoLetra+valor);
		}
  }
  moficarContraste(){
    setContraste()
		this.setState({ classeContraste: getContraste()})
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
              <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="DocesNumber">Quantidade:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="number" name="number" id="DocesNumber" placeholder="Digite a quantidade" />
            </FormGroup>
             <FormGroup style={{color:'black'}}>
              <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="DocesSelect">Selecione o recheio:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="select" name="select" id="DocesSelect">
                <option>Carne</option>
                <option>Frango</option>
              </Input>
            </FormGroup>
            <FormGroup style={{color:'black'}}>
              <Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="DocesSelect">Tamanho:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="select" name="select" id="DocesSelect">
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
            <h2  style={{fontSize: (this.state.tamanhoLetra*2)+'px', marginTop:'20px'}}>Doces</h2>
            <CardGroup style={{marginTop:'20px'}}>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar Brigadeiro" width="100%" src="http://creativecakes.com.br/wp-content/uploads/2016/09/7-1024x640.jpg"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                          <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                            <Input  type="checkbox" id="checkbox2" />{' '}
                            Brigadeiro
                                  
                          </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar Açúcar" width="100%" src="http://www.tribunadojurua.com.br/wp-content/uploads/2012/12/a%C3%A7%C3%BAcar-1024x640.jpg"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                      <FormGroup check>
                        <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                          <Input  type="checkbox" id="checkbox2" />{' '}
                          Açúcar
                                
                        </Label>
                      </FormGroup>
                    </CardFooter>
                </Card>
                <Card inverse style={{borderSize:'1px'}}>
                    <CardImg alt="Selecionar Tortilete" width="100%" src="http://www.refugedulachat.com/wp-content/uploads/2013/12/tatre-aux-myrtilles-faite-maison-1024x640.jpg"/>
                    
                    
                    <CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
                            <FormGroup check>
                              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
                                <Input  type="checkbox" id="checkbox2" />{' '}
                                Tortilete
                                
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

export default Doces;