import React from 'react';
import { Row,Col,Container,CardFooter,Card,
	FormGroup,Form,Label,
	Input,CardHeader,
	CardBody,CardImg, CardGroup,CardTitle,
	CardText,CardImgOverlay,Button } from 'reactstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import TelaInicial from './TelaInicial';

export default class Selecao extends React.Component {
	constructor(props) {
    super(props);
    this.tamanhoPadrao = 20
    this.state = {
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

  render(){
		return (
			<div className= {this.state.classeContraste} >
				<div style={{background:'black'}}>
					<Button color="link" onClick = {() => this.moficarFonte(-2)}>Diminuir fonte</Button>
					<Button color="link" onClick = {() => this.moficarFonte(0)}>Fonte normal</Button>
					<Button color="link" onClick = {() => this.moficarFonte(2)}>Aumentar fonte</Button>
					<Button color="link" onClick = {() => this.moficarContraste()} style= {{float: "right"}}>Constraste</Button>
				</div>
			<TelaInicial/>
			<Container style={{padding:'10px'}}>
					<h2  style={{fontSize: (this.state.tamanhoLetra*2)+'px', marginTop:'20px'}}>Selecione</h2>
					<CardGroup style={{marginTop:'20px'}}>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de Sucos" width="100%" src="https://vivermelhor.info/wp-content/uploads/2015/01/sucos-que-ajudam-a-emagrecer-1024x640.jpg"/>
							
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Sucos
								</h5>
								<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/sucos" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
								</Button>
								
							</CardFooter>
						</Card>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de bolos" width="100%" src="https://ondss.com/wp-content/uploads/data/2017/12/9/Cake-High-Definition-Wallpapers-WDSC0037705-1024x640.jpg"/>
							
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Bolos
									<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/bolos" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
									</Button>
								</h5>
							</CardFooter>
						</Card>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de doçes" width="100%" src="http://www.vidalowcarb.com.br/wp-content/uploads/2018/05/anivers%C3%A1rio-low-carb-3-1024x640.png"/>
							
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Doces
									<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/doces" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
									</Button>
								</h5>
							</CardFooter>
						</Card>
					</CardGroup>
					<CardGroup>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de salgados" width="100%" src="http://opasteldafeira.com/wp-content/uploads/2017/02/pastel-1-1024x640.jpg"/>
							
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Salgados
									<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/salgados" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
									</Button>
								</h5>
							</CardFooter>
						</Card>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de refrigerantes" width="100%" src="http://innovationinsider.com.br/wp-content/uploads/2016/06/3cbd4ffaf3337aa29293e62e871b5017_large-1024x640.jpeg"/>
							
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Refrigerantes
									<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/refrigerantes" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
									</Button>
								</h5>
							</CardFooter>
						</Card>
						<Card inverse style={{borderSize:'1px'}}>
							<CardImg alt="Seção de pizzas" width="100%" src="http://www.construarttis.com.br/wp-content/uploads/2015/10/untitled-1024x640.png"/>
								   
							
							<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
								<h5 style={{fontSize: this.state.tamanhoLetra+'px'}}>
									Pizzas
									<Button size='sm' color="danger"  style={{fontSize: (this.state.tamanhoLetra*0.7)+'px',float:'right'}}>
										<Link to="/pizzas" style={{textDecoration:'none',color:'white'}}>Entrar</Link>
									</Button>
								</h5>
							</CardFooter>
						</Card>
					</CardGroup>

			</Container>
			</div>
		);
	}
}