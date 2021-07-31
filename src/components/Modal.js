import { React, PureComponent } from 'react';
import '../assets/home.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {URL_LOGIN, getUsers, createUser, getUser} from '../api/user';
import '../assets/chess.scss';
import '../assets/modal.scss';




class Modal extends PureComponent {
     constructor() {
          super();
          this.state = {
               users: null,
               user: null,
          }
     }
     componentDidMount = () =>{
          // getUsers().then((res) => {
          //      this.setState({ users: res })
          //      console.log("RES --> ", res)
          // }).catch((error) => { console.log(error) })
          // getUser(this.props.auth[0]).then(res=>{this.setState({user: res}); console.log("user", res)}).catch(error=>console.log(error))
     }


     render() {
          // formulaire
          return(
               <>
                     <div class="popup" id={this.props.id}>
                         <div class="popup-inner">
                              <div class="popup__photo">
                                   <img src={this.props.imageSide} alt=""/>
                              </div>
                              <div class="popup__text">
                                   <h1>{this.props.title}</h1>
                                   <p>{this.props.content}</p>
                              </div>
                              <a class="popup__close" href="#">X</a>
                         </div>
                    </div>      
               </>
          )
     }
}

export default Modal;

