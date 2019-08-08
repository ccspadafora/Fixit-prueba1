//SECCIÓN DE CLIENTES DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';

// import admin from 'firebase-admin';

class Clientes extends Component {
    constructor () {
        super() 
        this.state = {
          data:[],
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('usuarios').orderBy('fechaInscripcion').get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
    }

    render () {
        return (
        <div>
{/* INICIO TABLA DE USUARIOS ACTUALES   */}

            <Table striped>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Fecha Inscripcion</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                 {this.state && this.state !== undefined ? this.state.data.map(item => {
                     return (<tr key={item.fechaInscripcion}>
                         <td>{item.nombre}</td>
                         <td>{item.direccion}</td>
                         <td>{item.fechaInscripcion}</td>
                         <td><Button>Eliminar</Button></td>
                     </tr>)
                 } ):null}
                </tbody>
             </Table>

{/* FIN TABLA DE USUARIOS ACTUALES   */}
        </div>
        );
    }
}

export default Clientes;