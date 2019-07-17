//SECCIÓN DE RESERVA "2. ¿Que necesitas arreglar?"

import React, {Component} from 'react';
import Box from './Box';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ReserveSection2 extends Component {  
  constructor () {
    super() 
    this.state = {
      data:[] 
    }
  }

  componentDidMount () {
    firebase.firestore().collection('servicios').get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })    
  }

  handleClick(e,p) {
    this.props.servicioEscogido(e,p);
  }

  render () {   
      return (
        <div>
{/* INICIO de título  */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>
              <div className='herosectiont-1'>
                  <h2>2. ¿Que necesitas arreglar?</h2>
              </div>
            </div>
{/* FIN de título */}
{/* INICIO servicios para mantenimiento  */} 
          {this.state.data.map(OptionBox => {
              if(OptionBox.celular === this.props.celularEscogido)
                return(
              <span key={OptionBox.servicio} onClick={() => this.handleClick(OptionBox.servicio,OptionBox.precio)}>
              <Box  descripcion={OptionBox.servicio}/>
              </span>
              )})}
              
            <div>
              <h2>Costo de reparación </h2>
              <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.precioEscogido)} </h5>
              <button><Link to="/home/3"> Siguiente </Link></button>
            </div>
{/* FIN servicios para mantenimiento  */} 


        </div>
      );
    }
  }

export default ReserveSection2;