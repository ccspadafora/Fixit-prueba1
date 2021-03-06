//PAGINA DE INICIÓN DE SESIÓN DE ADMINISTRADOR
//COMPONENTE EN DONDE SE IDENTIFICA SI UN USUARIO YA HA INICIADO SESIÓN O NO Y SEGÚN ESO RENDERIZA UN COMPONENTE DE INICIO DE SESIÓN O EL DEL ADMINISTRADOR

import React, {Component} from 'react';
import Login from '../pages/Login';
import AdminFixit from '../pages/AdminFixit';
import firebase from 'firebase/app';
import 'firebase/auth';

class AppLogin extends Component {
 

    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    //IDENTIFICA SI EL USUARIO ESTA LOGGEADO O NO

    componentDidMount(){
        this.authListener();
    }

    authListener() {
    firebase.auth().onAuthStateChanged((user) => {       
        if (user) {
          // User is signed in.
        this.setState({user});        
        
        } else {
          // User is signed out.
          this.setState({user:null});
        }
      });}
 
//RENDERIZA UN COMPONENTE U OTRO SEGÚN SI EL USUARIO ESTÁ LOGGEADO O NO

    render () {
        return (
        <div>
        {this.state.user ? (<AdminFixit/>):(<Login/>)}
        </div>
        );
    }
}

export default AppLogin;