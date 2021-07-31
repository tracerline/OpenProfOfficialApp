import { React, PureComponent } from 'react';
import '../assets/home.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {URL_LOGIN, getUsers, createUser, getUser} from '../api/user';
import '../assets/chess.scss';
import chest from '../assets/resources/chest.png';
import alix from '../assets/resources/ALIX.png';
import maarouf from '../assets/resources/MAROUF.png';
import gwen from '../assets/resources/GWEN.png';


class Chess extends PureComponent {
     constructor() {
          super();
          this.state = {
               users: null,
               user: null,
          }
     }
     componentDidMount = () =>{
          getUsers().then((res) => {
               this.setState({ users: res })
               console.log("RES --> ", res)
          }).catch((error) => { console.log(error) })
          getUser(this.props.auth[0]).then(res=>{this.setState({user: res}); console.log("user", res)}).catch(error=>console.log(error))
     }


     render() {
          // formulaire
          const {users, user} = this.state
          return (
               <>
               <div class="area" >
                    <ul class="circles">
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
                    <div className="bar">
                         <div className="resources">
                              <div className="user-resources">
                                   <span>{this.props.auth[0]}</span><br/>
                                        {user && user[0].etat=='hors-ligne' ? (
                                             <span><div id="inactive"></div>Hors-ligne</span>
                                        ) : (
                                             <span><div id="active"></div>Actif</span>
                                        )}
                              </div>
                              <p className='user-inventory'>{user && user[0].gems} 
                                   <img className="coin" 
                                   src="https://lh3.googleusercontent.com/proxy/DGC3qsMA7dvmSYt89U6X2rz69UyyZEAp_cN-Mey2jK0ezLNPJRqKSs16JVTx0udwdtvYEHqV3DFD8de1FgmSfG8ZQMC7zIKPA6FjtYvaPYm7hDRJkkdgtUkcCdOT" 
                                   width="40" height="40"/>
                              </p>
                         </div>
                    </div>
                    <div className="openChest">
                         <img alt="" src={chest} width="300" height="300"/>
                    </div>
                    <div className="cards-carousel">
                         <img alt="" src={maarouf} width="100" height="120"/>
                         <img alt="" src={gwen} width="100" height="120"/>
                         <img alt="" src={alix} width="100" height="120"/>
                    </div>
                    <div className="tuto">
                         <h3>Mode d'emploi</h3>
                         <span>Cliquez sur le coffre pour obtenir les cartes OpenProf et les collectionner</span><br/>
                         <span>Chaque coffre coûte 10 gems, et peut contenir n'importe quelle carte</span><br/>
                         <span>Communes, rares, épiques, légendaire et ultras, prouvez aux autres joueurs</span><br/>
                         <span>que vous êtes le plus chanceux</span>
                    </div>
               </>
               
          )
     }
}

export default Chess;

