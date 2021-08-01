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
import { getUsers, updateUserCards, getUser } from '../api/user';
import Cards from './Cards';


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
          this.userCards = null
          this.choose = this.choose.bind(this);
          this.getCardsUser = this.getCardsUser.bind(this)
;          this.pattern = [{
               "gaillard":{"isGet": false, "nb": 0},
               "lbath":{"isGet": false, "nb": 0},
               "muridi":{"isGet": false, "nb": 0},
               "alix":{"isGet": false, "nb": 0},
               "maarouf":{"isGet": false, "nb": 0},
               "gwen":{"isGet": false, "nb": 0},
               "cardon":{"isGet": false, "nb": 0},
               "gogueyTOTY":{"isGet": false, "nb": 0},
               "rhety":{"isGet": false, "nb": 0},
               "paj":{"isGet":  false, "nb": 0}
          }]
     }
     componentDidMount = () =>{
          Gifffer();
          this.getCardsUser();
          this.props.pseudo && getUser(this.props.pseudo).then(
               res=>{
                    console.log("only user : ", res)
                    this.userCards = JSON.parse(res[0].cards)
                    // console.log("gaillard test", this.userCards[0]["gaillard"].isGet)
               }
          )
     }

     updateCards(){
          updateUserCards(this.props.pseudo, this.userCards)
          .then(toast.dark("Inventaire mis à jour"))
          .catch(error=>{console.log(error)})
     }

     getCardsUser(){
          getUsers().then((res) => {
               this.setState({ users: res })
               res.map(user=>{
                    if(user.cards === null) {
                         updateUserCards(user.pseudo, this.pattern)
                         .then(res2=>{console.log("ok")})
                         .catch(error2=>{console.log(error2)})
                    }
                    
               })
               
          }).catch((error) => { console.log(error) });
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
          return array[Math.floor(Math.random() * array.length)];
      }

     choose(){
          var cards = this.userCards[0]
          this.setState({isCard: true});
          var randomCard = this.get(this.cards)
          if(randomCard){
               this.setState({cardChoosen: randomCard})
          }
          switch (randomCard) {

               case "gaillard":
                    this.setState({cardChoosen: gaillard})
                    if(!cards["gaillard"].isGet){
                         cards["gaillard"].isGet = true
                    }
                    cards["gaillard"].nb += 1
                    this.updateCards()
                    
               break;
               case "lbath":
                    this.setState({cardChoosen: lbath})
                    if(!cards["lbath"].isGet){
                         cards["lbath"].isGet = true
                    }
                    cards["lbath"].nb += 1
                    this.updateCards()
               break;
               case "muridi":
                    this.setState({cardChoosen: muridi})
                    if(!cards["muridi"].isGet){
                         cards["muridi"].isGet = true
                    }
                    cards["muridi"].nb += 1
                    this.updateCards()
               break;
               case "alix":
                    this.setState({cardChoosen: alix})
                    if(!cards["alix"].isGet){
                         cards["alix"].isGet = true
                    }
                    cards["alix"].nb += 1
                    this.updateCards()
               break;
               case "vlestid":
                    this.setState({cardChoosen: vlestid})
                    if(!cards["vlestid"].isGet){
                         cards["vlestid"].isGet = true
                    }
                    cards["vlestid"].nb += 1
                    this.updateCards()
               break;
               case "gwen":
                    this.setState({cardChoosen: gwen})
                    if(!cards["gwen"].isGet){
                         cards["gwen"].isGet = true
                    }
                    cards["gwen"].nb += 1
                    this.updateCards()
               break;
               case "maarouf":
                    this.setState({cardChoosen: maarouf})
                    if(!cards["maarouf"].isGet){
                         cards["maarouf"].isGet = true
                    }
                    cards["maarouf"].nb += 1
                    this.updateCards()
               break;
               case "cardon":
                    this.setState({cardChoosen: cardon})
                    if(!cards["cardon"].isGet){
                         cards["cardon"].isGet = true
                    }
                    cards["cardon"].nb += 1
                    this.updateCards()
               break;
               case "gogueyTOTY":
                    this.setState({cardChoosen: gogueyTOTY})
                    if(!cards["gogueyTOTY"].isGet){
                         cards["gogueyTOTY"].isGet = true
                    }
                    cards["gogueyTOTY"].nb += 1
                    this.updateCards()
               break;
               case "paj":
                    this.setState({cardChoosen: paj})
                    if(!cards["paj"].isGet){
                         cards["paj"].isGet = true
                    }
                    cards["paj"].nb += 1
                    this.updateCards()
               break;
               case "rhety":
                    this.setState({cardChoosen: rhety})
                    if(!cards["rhety"].isGet){
                         cards["rhety"].isGet = true
                    }
                    cards["rhety"].nb += 1
                    this.updateCards()
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

