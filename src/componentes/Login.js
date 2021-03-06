import React from 'react';
import { Row,Col,Container,FormGroup,Form,Label,Input,Button } from 'reactstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import '../App.css';
import Inicial from './Inicial';
import fire from './fire';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		// Login
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);
		this.tamanhoPadrao = 24
		this.state = {
			tamanhoLetra: this.tamanhoPadrao,
			classeContraste: 'semContraste',

			email:'',
			password:''
		};
  }

	// Login
	login(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( (u) => {
		}).catch((error) => {
			console.log(error);
		});
	}

	signup(e) {
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.catch((error) => {
			console.log(error);
		});
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

  authListener() {
		fire.auth().onAuthStateChanged( (user) => {
		  console.log(user);
		  if (user) {
			  this.setState({ user });
			  localStorage.setItem('user', user.uid);
		  }
		  else {
			  this.setState({ user: null });
			  localStorage.removeItem('user');
		  }
	  });
  }

	// Acessibilidade
  moficarFonte(valor){
	if(valor > 0 && this.state.tamanhoLetra < 40){
		this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
	}else if (valor < 0  && this.state.tamanhoLetra > 15){
		this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
	} else if(valor == 0){
		this.setState({tamanhoLetra: this.tamanhoPadrao});
		}
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
					<Inicial/>
			<Container>
					
					<Row>
							<Col sm='12' style={{marginTop: '15px'}} >
							<Label style={{fontSize: (this.state.tamanhoLetra*1.7)+'px'}}>Login</Label>
							</Col>
					</Row>
					<Form style={{marginTop:'20px'}}>
					<FormGroup>
					<Label for="exampleEmail" style={{fontSize: this.state.tamanhoLetra+'px'}}>Email:</Label>
					<Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="email" name="email" id="exampleEmail" placeholder="Digite seu Email" />
					</FormGroup>
					<FormGroup>
					<Label for="examplePassword" style={{fontSize: this.state.tamanhoLetra+'px'}}>Password:</Label>
					<Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="password" name="password" id="examplePassword" placeholder="Digite sua Senha" />
					</FormGroup>
					</Form>
					<Button color="secondary"><Link to='/selecao/' style={{fontSize: (this.state.tamanhoLetra*0.65)+'px',textDecoration:'none',color:'white'}}>Entrar</Link></Button>{' '}
					<Button  color="info"><Link to='/cadastro/' style={{fontSize: (this.state.tamanhoLetra*0.65)+'px',textDecoration:'none',color:'white'}}>Cadastrar</Link></Button>
					
			</Container>
			</div>
		);
  }
};