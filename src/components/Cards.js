import { React, PureComponent } from 'react';
import '../assets/home.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/chess.scss';
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
import { getUser } from '../api/user';
import DateCountdown from 'react-date-countdown-timer';


class Cards extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {
               userCards: null,
          }
          this.cards = []

     }
     componentDidMount = () =>{
          // console.log(this.props.auth[0])
          this.getCards()
          // getUsers().then((res) => {
          //      this.setState({ users: res })
          //      console.log("RES --> ", res)
          // }).catch((error) => { console.log(error) })
          // getUser(this.props.auth[0]).then(res=>{this.setState({user: res}); console.log("user", res)}).catch(error=>console.log(error))
     }

     componentDidUpdate = () =>{
          // this.getCards()
     }

     getCards(){
          console.log("this.props.auth", this.props.auth)
          getUser(this.props.auth).then(
               res=>{
                    console.log("only user : ", res[0].cards)
                    this.setState({userCards: JSON.parse(res[0].cards)})
                    console.log("gaillard test", this.cards)
               })
               .catch(
                    error=>{console.log(error)}
               )
     }

     verifyCard(element){
          var _is_disabled_= null

          getUser(this.props.auth[0]).then(
               res=>{
                    this.cards = JSON.parse(res[0].cards)
                         
                    if(this.cards[0][element].isGet){
                         _is_disabled_ = false
                    }else{
                         _is_disabled_ = true
                    }
                    return _is_disabled_
               })
               .catch(
                    error=>{console.log(error)}
               )
          
          
     }

     render() {
          
          // formulaire
          // const {users, user} = this.state
          return (
               <>
               <div className="area" >
                    <ul className="circles">
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                    </ul>
               </div >
               <div className="cards">
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["gaillard"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Faillard</h3>
                         )}
                         <h4 className='common'>Carte commune</h4>
                         {this.state.userCards && this.state.userCards[0]["gaillard"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["gaillard"].nb}</span>
                              </div>
                         )}
                         <img src={gaillard} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["gaillard"].isGet ? "disabled" : "clear"}/>
                         
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["lbath"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Lbath 7</h3>
                         )}
                         
                         <h4 className='common'>Carte commune</h4>
                         {this.state.userCards && this.state.userCards[0]["lbath"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["lbath"].nb}</span>
                              </div>
                         )}
                         <img src={lbath} alt="" width="210" height="250"class={this.state.userCards && !this.state.userCards[0]["lbath"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["alix"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Goglix</h3>
                         )}
                         <h4 className='rare'>Carte rare</h4>
                         {this.state.userCards && this.state.userCards[0]["alix"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["alix"].nb}</span>
                              </div>
                         )}
                         <img src={alix} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["alix"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["muridi"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Juridi</h3>
                         )}
                         <h4 className='rare'>Carte rare</h4>
                         {this.state.userCards && this.state.userCards[0]["muridi"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["muridi"].nb}</span>
                              </div>
                         )}
                         <img src={muridi} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["muridi"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         <h3>Inconnue</h3>
                         <h4 className='rare'>Carte rare</h4>
                         {/* {this.state.userCards && this.state.userCards[0]["vlestid"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["vlestid"].nb}</span>
                              </div>
                         )} */}
                         <img src={vlestid} alt="" width="210" height="250" class={"disabled"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["maarouf"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Faarouf</h3>
                         )}
                         <h4 className='epic'>Carte épique</h4>
                         {this.state.userCards && this.state.userCards[0]["maarouf"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["maarouf"].nb}</span>
                              </div>
                         )}
                         <img src={maarouf} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["maarouf"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["gwen"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Gwen</h3>
                         )}
                         <h4 className='epic'>Carte épique</h4>
                         {this.state.userCards && this.state.userCards[0]["gwen"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["gwen"].nb}</span>
                              </div>
                         )}
                         <img src={gwen} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["gwen"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["cardon"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Carton</h3>
                         )}
                         <h4 className='legendary'>Carte légendaire</h4>
                         {this.state.userCards && this.state.userCards[0]["cardon"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["cardon"].nb}</span>
                              </div>
                         )}
                         <img src={cardon} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["cardon"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["gogueyTOTY"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Goglix TOTY</h3>
                         )}
                         <h4 className='legendary'>Carte légendaire</h4>
                         {this.state.userCards && this.state.userCards[0]["gogueyTOTY"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["gogueyTOTY"].nb}</span>
                              </div>
                         )}
                         <img src={gogueyTOTY} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["gogueyTOTY"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["rhety"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>Monseigneur</h3>
                         )}
                         <h4 className='ultra'>Carte ultra</h4>
                         {this.state.userCards && this.state.userCards[0]["rhety"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["rhety"].nb}</span>
                              </div>
                         )}
                         <img src={rhety} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["rhety"].isGet ? "disabled" : "clear"}/>
                    </div>
                    <div>
                         {this.state.userCards && !this.state.userCards[0]["paj"].isGet ? (
                              <h3>Inconnue</h3>
                         ) : (
                              <h3>PAJ</h3>
                         )}
                         <h4 className='ultra'>Carte ultra</h4>
                         {this.state.userCards && this.state.userCards[0]["paj"].isGet && (
                              <div className="nbCard">
                                   <span>{this.state.userCards && this.state.userCards[0]["paj"].nb}</span>
                              </div>
                         )}
                         <img src={paj} alt="" width="210" height="250" class={this.state.userCards && !this.state.userCards[0]["paj"].isGet ? "disabled" : "clear"}/>
                    </div>
               </div>
                    
               </>
               
          )
     }
}

export default Cards;

