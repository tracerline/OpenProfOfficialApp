import { React, PureComponent } from 'react';
import '../assets/home.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Gifffer from 'gifffer';
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
          // this.cards = [gaillard, lbath, muridi, alix, vlestid, maarouf, gwen, cardon, gogueyTOTY, rhety, paj];
          this.cards = {
               "gaillard": 0.25,
               "lbath": 0.25,
               "muridi": 0.125,
               "alix": 0.125,
               "maarouf": 0.0625,
               "gwen": 0.0625,
               "cardon": 0.05,
               "gogueyTOTY": 0.05,
               "rhety": 0.0125,
               "paj":  0.0125,
          }
          this.choose = this.choose.bind(this);
     }
     componentDidMount = () =>{
          Gifffer();
          // getUsers().then((res) => {
          //      this.setState({ users: res })
          //      console.log("RES --> ", res)
          // }).catch((error) => { console.log(error) })
          // getUser(this.props.auth[0]).then(res=>{this.setState({user: res}); console.log("user", res)}).catch(error=>console.log(error))
     }
     get(input) {
          var array = []; // Just Checking...
          for(var item in input) {
              if ( input.hasOwnProperty(item) ) { // Safety
                  for( var i=0; i<input[item]; i++ ) {
                      array.push(item);
                  }
              }
          }
          // Probability Fun
          return array[Math.floor(Math.random() * array.length)];
      }
     // pickAWinningItem(data) {
     //      var winner = Math.random();
     //      var threshold = 0;
     //      for (let i = 0; i < data.length; i++) {
     //          threshold += data[i].prob;
     //          if (threshold > winner) {
     //              return data[i]
      
     //          }
     //      }
     //  }

     choose(){
          this.setState({isCard: true});
          var randomCard = this.get(this.cards)
          if(randomCard){
               this.setState({cardChoosen: randomCard})
          }
          switch (randomCard) {
               case "gaillard":
                    this.setState({cardChoosen: gaillard})
               break;
               case "lbath":
                    this.setState({cardChoosen: lbath})
               break;
               case "muridi":
                    this.setState({cardChoosen: muridi})
               break;
               case "alix":
                    this.setState({cardChoosen: alix})
               break;
               case "vlestid":
                    this.setState({cardChoosen: vlestid})
               break;
               case "gwen":
                    this.setState({cardChoosen: gwen})
               break;
               case "maarouf":
                    this.setState({cardChoosen: maarouf})
               break;
               case "cardon":
                    this.setState({cardChoosen: cardon})
               break;
               case "gogueyTOTY":
                    this.setState({cardChoosen: gogueyTOTY})
               break;
               case "paj":
                    this.setState({cardChoosen: paj})
               break;
               case "rhety":
                    this.setState({cardChoosen: rhety})
               break;
               default:
                    toast.error("Connexion avec le serveur perdue, veuillez vous reconnecter")
                    break;
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
                               <a class="popup__close" href="#closeModal">X</a>
                          </div>
                          ) : (
                         <div className={this.state.cardChoosen ? "popup-inner background-open-chess" : "popup-inner background-chess"}>
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
                                        <img class="card" src={this.state.cardChoosen} alt=""/>
                                   </div>
                              )}
                              

                              <a class="popup__close" href="#closeModale" onClick={()=>this.setState({isCard: false, cardChoosen: null})}>X</a>
                         </div>
                          )}
                         
                    </div>      
               </>
          )
     }
}

export default Modal;

