//https://www.davebennett.tech/react-login-with-google-firebase/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import App from './App';

ReactDOM.render(
    (<App/>),
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
