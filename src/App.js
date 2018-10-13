import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import './App.css';
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

  render() {
    return (
      <div class='semContraste'>
      <Router>
        <div>
          
          <Route exact path="/" component={Login} />
          <Route path="/cadastro/" component={Cadastro} />
          <Route path="/selecao/" component={Selecao} />
          <Route path="/sucos/" component={Sucos} />
          <Route path="/refrigerantes/" component={Refrigerantes} />
          <Route path="/salgados/" component={Salgados} />
          <Route path="/bolos/" component={Bolos} />
          <Route path="/pizzas/" component={Pizzas} />
          <Route path="/doces/" component={Doces} />
          
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
