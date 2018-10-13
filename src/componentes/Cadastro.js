import React from 'react';
import { Row,Col,Container,FormGroup,Form,Label,Input,Button } from 'reactstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Inicial from './Inicial';

export default class Cadastro extends React.Component {
  
  constructor(props) {
    super(props);
    this.tamanhoPadrao = 24
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

  render(){
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
                <Col sm='12' style={{marginTop:'15px'}} >
                    <Label style={{fontSize: (this.state.tamanhoLetra*1.7)+'px'}}>Cadastro</Label>
                </Col>
            </Row>
            <Form style={{marginTop:'20px'}}>
            <FormGroup>
              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} for="exampleEmail">Email:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="email" name="email" id="exampleEmail" placeholder="Digite seu Email" />
            </FormGroup>
            <FormGroup>
              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} for="examplePassword">Senha:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="password" name="password" id="examplePassword" placeholder="Digite sua Senha" />
            </FormGroup>
            <FormGroup>
              <Label style={{fontSize: this.state.tamanhoLetra+'px'}} for="examplePassword">Confirmar Senha:</Label>
              <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="password" name="password" id="examplePassword" placeholder="Digite novamente sua senha" />
            </FormGroup>
            <FormGroup>
                <Label style={{fontSize: this.state.tamanhoLetra+'px'}} for="examplePassword">CPF:</Label>
                <Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} placeholder="Digite seu CPF" />
            </FormGroup>
            </Form>
            <Button color="secondary" style={{fontSize: (this.state.tamanhoLetra*0.65)+'px'}}>Cadastrar</Button>{' '}
            <Button  color="info"><Link to='/'  style={{fontSize: (this.state.tamanhoLetra*0.65)+'px',textDecoration:'none',color:'white'}}>Voltar</Link></Button>
        </Container>
      </div>
    );
  }
};
