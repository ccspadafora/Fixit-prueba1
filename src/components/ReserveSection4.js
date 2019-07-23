//SECCIÓN DE RESERVA "4. Confirmación y pago"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '../components/styles/reservesection4.css';


class ReserveSection4 extends Component {  
  constructor () {
    super()
    this.state = {
      pago: '',
    }
    this.db = firebase.firestore()  
  }
  
  handleChange(e) {
    return this.props.modoPago(e);
  }

  guardarServicioEnBaseDeDatos() {
    return this.db.collection('reservas').add({
      celular: this.props.estado.celular,
      servicio: this.props.estado.servicio,
      precio:this.props.estado.precio,
      nombre:this.props.estado.nombre,
      apellido:this.props.estado.apellido,
      direccion: this.props.estado.direccion,
      detalleDireccion: this.props.estado.detalleDireccion,
      fechaDeRecogida:this.props.estado.fechaDeRecogida,
      hora: this.props.estado.hora,
      correo: this.props.estado.correo,
      equipo: this.props.estado.equipo,
      pago:this.state.pago,
      fechaDeSolicitud: firebase.firestore.FieldValue.serverTimestamp()
     })
  }

  botonDeSiguiente = ()=>{
    if(this.state.pago)
    return  <button onClick={()=>this.guardarServicioEnBaseDeDatos()}><Link to='/thankyou'> Confirmar </Link></button>
    else
    return <h5>Elige un medio de pago para continuar</h5>
  }
  render () {   
      return (
        <div>

        {/* inicio de título "selecciona tu dispositivo" */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>
              <div className='herosectiont-1'>
                  <h2>4. Confirmación y pago</h2>
              </div>
            </div>
        {/* fin de título "selecciona tu dispotivo" */}

      <section className='form-container-inforeserva'>
        <div className='info-servicio-cliente'>
          <h2>Dirección y contacto:</h2>
          <p>{this.props.estado.nombre} {this.props.estado.apellido}</p>
          <p>{this.props.estado.direccion}</p>
          <p>{this.props.estado.detalleDireccion}</p>
          <p>{this.props.estado.celular}</p>
          <p>{this.props.estado.correo}</p>
        </div>

        <div className='info-servicio-cliente'>
         <h2>Servicio:</h2>
         <p>{this.props.estado.servicio}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Equipo:</h2>
          <p>{this.props.estado.celular}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Fecha y hora:</h2>
          <p>{this.props.estado.fechaDeRecogida}</p>
          <p>{this.props.estado.hora}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Valor a pagar:</h2>
          <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.estado.precio)} </h5>
        </div> 

        <div className='info-servicio-cliente'>
          <h2>¿Cómo vas a pagar?</h2>
          <form className='form-mediodepago'>
          <label><input type="radio" name="pago" value="payu" onChange={()=>this.setState({pago:'payu'})} /> PayU </label>
          <label><input type="radio" name="pago" value="contraEntrega" onChange={()=>this.setState({pago:'contraEntrega'})} /> Contra Entrega </label>
          </form>
        </div> 

        <div className='info-servicio-cliente'> 
          {this.botonDeSiguiente()}
        </div> 
      
      </section>  

        </div>
      );
    }
  }

export default ReserveSection4;