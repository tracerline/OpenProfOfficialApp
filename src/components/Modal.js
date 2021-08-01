import { React, PureComponent } from 'react';
import '../assets/home.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {URL_LOGIN, getUsers, createUser, getUser} from '../api/user';
import '../assets/chess.scss';
import '../assets/modal.scss';
import '../assets/ui.scss';
import alix from '../assets/resources/ALIX.png';
import maarouf from '../assets/resources/MAROUF.png';
import gwen from '../assets/resources/GWEN.png';
import cardon from '../assets/resources/CARDON.png';
import gogueyTOTY from '../assets/resources/GOGUEYTOTY.png';
import gaillard from '../assets/resources/GAILLARD.png';
import lbath from '../assets/resources/ahmed_v2.png';
import muridi from '../assets/resources/JUSTINE.png';
import rhety from '../assets/resources/RHETY.png';
import paj from '../assets/resources/EL_BOSS.png';
import vlestid from '../assets/resources/VLESTID.png';
import '../assets/cards.scss';


class Modal extends PureComponent {
     constructor() {
          super();
          this.state = {
               users: null,
               user: null,
               isCard: false,
               cardChoosen: null,
          }
          this.cards = [gaillard, lbath, muridi, alix, vlestid, maarouf, gwen, cardon, gogueyTOTY, rhety, paj];
          this.cards = {
               "gaillard": {src: gaillard, prob: 0.25},
               "lbath": {src: lbath, prob: 0.25},
               "muridi": {src: muridi, prob: 0.125},
               "alix": {src: alix, prob: 0.125},
               "maarouf": {src: maarouf, prob: 0.0625},
               "gwen": {src: gwen, prob: 0.0625},
               "cardon": {src: cardon, prob: 0.8},
               "gogueyTOTY": {src: gogueyTOTY, prob: 0.8},
               "rhety": {src: rhety, prob: 0.0005},
               "paj": {src: paj, prob: 0.0005},
          }
          this.choose = this.choose.bind(this);
     }
     componentDidMount = () =>{
          // getUsers().then((res) => {
          //      this.setState({ users: res })
          //      console.log("RES --> ", res)
          // }).catch((error) => { console.log(error) })
          // getUser(this.props.auth[0]).then(res=>{this.setState({user: res}); console.log("user", res)}).catch(error=>console.log(error))
     }
     pickAWinningItem(data) {
          var winner = Math.random();
          var threshold = 0;
          for (let i = 0; i < data.length; i++) {
              threshold += parseFloat(data[i].prob);
              if (threshold > winner) {
                  return data[i]
      
              }
          }
      }

     choose(){
          this.setState({isCard: true});
          var randomCard = this.pickAWinningItem(this.cards)
          if(randomCard){
               this.setState({cardChoosen: randomCard})
          }
          console.log(randomCard);
     }
     render() {
          // formulaire
          return(
               <>
                     <div class="popup" id={this.props.id}>
                          {!this.props.isChess ? (
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
                          ) : (
                         <div class="popup-inner background-chess">
                              {/* <div class="popup__photo">
                                   <img src={this.props.imageSide} alt=""/>
                              </div> */}
                              {/* <div class="popup__text">
                                   <h1>{this.props.title}</h1>
                                   <p>{this.props.content}</p>
                              </div> */}
                              {!this.state.isCard ? (
                                   <div class="d-flex-center">
                                        <span class="btn" onClick={()=>this.choose()}>Obtenir ma carte</span>
                                   </div>
                              ) : (
                                   <div class="d-flex-center">
                                        <img class="card" src={'ouo'} alt=""/>
                                   </div>
                              )}
                              

                              <a class="popup__close" href="#">X</a>
                         </div>
                          )}
                         
                    </div>      
               </>
          )
     }
}

export default Modal;

