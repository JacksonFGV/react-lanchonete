import TelaInicial from '../TelaInicial';
import { Badge } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card,Container,CardImg,CardGroup,CardFooter,Input,Label,FormGroup } from 'reactstrap';

class Bolos extends Component {
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
			<h2 style={{fontSize: (this.state.tamanhoLetra*2)+'px', marginTop:'20px'}}>Bolos</h2>
			<CardGroup style={{marginTop:'20px'}}>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar bolo de Banana" src="https://carameloskitchen.pt/wp-content/uploads/2018/08/BoloAbobora-Pos_Producao2-1024x640.jpg" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
						<FormGroup check>
							<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
							<Input type="checkbox" id="checkbox2" />{' '}
							Banana
									
							</Label>
						</FormGroup>
					</CardFooter>
				</Card>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar bolo de chocolate" src="https://www.tvgazeta.com.br/wp-content/uploads/2017/07/bolo-1024x640.png" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
						<FormGroup check>
						<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
							<Input type="checkbox" id="checkbox2" />{' '}
							Chocolate
								
						</Label>
						</FormGroup>
					</CardFooter>
				</Card>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar bolo normal" src="https://ondss.com/wp-content/uploads/data/2017/12/9/Cake-High-Definition-Wallpapers-WDSC0037705-1024x640.jpg" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
							<FormGroup check>
								<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
								<Input type="checkbox" id="checkbox2" />{' '}
								Normal
								
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

export default Bolos;