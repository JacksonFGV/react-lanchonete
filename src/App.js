import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import './App.css';
import fire from './componentes/fire';

import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login';
import Selecao from './componentes/Selecao';
import Bolos from './componentes/opcao/Bolos';
import Doces from './componentes/opcao/Doces';
import Pizzas from './componentes/opcao/Pizzas';
import Refrigerantes from './componentes/opcao/Refrigerantes';
import Salgados from './componentes/opcao/Salgados';
import Sucos from './componentes/opcao/Sucos';


class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      (
        <Router>
            <div class='semContraste'>
                <Switch>
                    <Route exact path="/" component={this.state.user ? (Selecao) : (Login)} />
                    <Route path="/cadastro/" component={Cadastro} />
                    <Route path="/selecao/" component={Selecao} />
                    <Route path="/sucos/" component={Sucos} />
                    <Route path="/refrigerantes/" component={Refrigerantes} />
                    <Route path="/salgados/" component={Salgados} />
                    <Route path="/bolos/" component={Bolos} />
                    <Route path="/pizzas/" component={Pizzas} />
                    <Route path="/doces/" component={Doces} />
                </Switch>
            </div>
        </Router>
    )
    );
  }
}

export default App;
