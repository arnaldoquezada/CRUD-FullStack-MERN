import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login';
import Index from './components/Index';
import Actualizar from './components/Actualizar';
import Registro from './components/Registro';

const estaAutenticado = () => {
  const token = sessionStorage.getItem('token')
  if (token){
    return true
  }
  else{
    return false
  }
} 

const MyRoute = (props) => {
  return estaAutenticado() ? <Route {...props} /> : <Redirect to="/" />
}

const PublicRoute = (props) => {
  return estaAutenticado() ?  <Redirect to="/index" /> : <Route {...props} />
}


function App() {
  return (    
    <Router>
        <Nav/>
        <PublicRoute path='/' exact component={Login} />
        <Route path='/registrar' exact component={Registro} />
        <MyRoute path='/index' exact component={Index} />
        <MyRoute path='/editar/:id' exact component={Actualizar} />
    </Router>
  );
}

export default App;
