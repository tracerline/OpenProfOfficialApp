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

class Cards extends PureComponent {
     constructor() {
          super();
          this.state = {
               
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
                         <h3>Gaillard</h3>
                         <h4 className='common'>Carte commune</h4>
                         <img src={gaillard} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Lbath 7</h3>
                         <h4 className='common'>Carte commune</h4>
                         <img src={lbath} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Goguey</h3>
                         <h4 className='rare'>Carte rare</h4>
                         <img src={alix} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Muridi</h3>
                         <h4 className='rare'>Carte rare</h4>
                         <img src={muridi} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Vlestid</h3>
                         <h4 className='rare'>Carte rare</h4>
                         <img src={vlestid} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Faarouf</h3>
                         <h4 className='epic'>Carte épique</h4>
                         <img src={maarouf} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Salaun</h3>
                         <h4 className='epic'>Carte épique</h4>
                         <img src={gwen} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Carton</h3>
                         <h4 className='legendary'>Carte légendaire</h4>
                         <img src={cardon} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Goguey Toty</h3>
                         <h4 className='legendary'>Carte légendaire</h4>
                         <img src={gogueyTOTY} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Monseigneur</h3>
                         <h4 className='ultra'>Carte ultra</h4>
                         <img src={rhety} alt="" width="210" height="250"/>
                    </div>
                    <div>
                         <h3>Paj</h3>
                         <h4 className='ultra'>Carte ultra</h4>
                         <img src={paj} alt="" width="210" height="250"/>
                    </div>
               </div>
                    
               </>
               
          )
     }
}

export default Cards;

