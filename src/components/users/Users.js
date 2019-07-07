import React from 'react'
import {connect} from 'react-redux'
import * as usersActions from '../../actions/usersActions'
class Users extends React.Component{
componentDidMount(){
    this.props.traerTodos();
}
ponerFilas=()=>(
    this.props.usuarios.map((usuario)=>(

        <tr key={usuario.id}>
            <td>
                {usuario.name}
            </td>
            <td>
                {usuario.email}
            </td>
            <td>
                {usuario.website}
            </td>
        </tr>
    ))
)
render(){
    //console.log(this.props)
    console.log(this.props.cargando)
    console.log(this.props.error)

    return(
   <div>
       <table>
           <thead>
               <tr>
                <th>
                    Nombre
                </th>
                <th>
                    Correo
                </th>
                <th>
                    Enlace
                </th>
               </tr>
           </thead>
           <tbody>
               {this.ponerFilas()}
           </tbody>
       </table>
   </div>
    )
}
}

const mapStateToProps = (reducers)=>{
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usersActions)(Users)