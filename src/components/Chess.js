import { React, PureComponent } from 'react';
import '../assets/home.scss';
import '../assets/ui.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {URL_LOGIN, getUsers, createUser, getUser} from '../api/user';
import Modal from './Modal';
import '../assets/chess.scss';
import chest from '../assets/resources/chest.png';
import alix from '../assets/resources/ALIX.png';
import maarouf from '../assets/resources/MAROUF.png';
import gwen from '../assets/resources/GWEN.png';
import coin from '../assets/resources/gem.png';


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
               <Modal id="chess" isChess={true}/>
               <body>
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
                                   src={coin} 
                                   width="40" height="40"/>
                              </p>
                         </div>
                    </div>
                    <div class="d-flex-center">
                         <div>
                              <a className="openChest top-3" href="#chess">
                                   <img alt="" src={chest} width="300" height="300"/>
                              </a>
                              <div className="cards-carousel">
                                   <img alt="" src={maarouf} width="100" height="120"/>
                                   <img alt="" src={gwen} width="100" height="120"/>
                                   <img alt="" src={alix} width="100" height="120"/>
                              </div>
                              
                         </div>
                         
                    </div>
                    <div className="tuto px-3">
                    <div class="courses-container">
	                    <div class="course">
		                    <div class="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    <a href="#">En savoir plus <i class="fas fa-chevron-right"></i></a>
		                    </div>
		                    <div class="course-info">
			                    <div class="progress-container">
				                    <div class="progress"></div>
				                    <span class="progress-text dark">
					                    0/1 coffre ouvert
				                    </span>
			                    </div>
			                    <h6 class="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 class="dark challenge">Ouvrir au moins un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 class="dark">Gemmes : 50</h6>
                                   <h6 class="dark">Expérience : 250</h6>
                                   <hr/>
			                    <button class="btn top-3">Vérifier</button>
		                    </div>
	                    </div>
                         <div class="course">
		                    <div class="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    <a href="#">En savoir plus <i class="fas fa-chevron-right"></i></a>
		                    </div>
		                    <div class="course-info">
			                    <div class="progress-container">
				                    <div class="progress"></div>
				                    <span class="progress-text dark">
					                    0/1 carte ultra
				                    </span>
			                    </div>
			                    <h6 class="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 class="dark challenge">Obtenir une carte de rareté Ultra en ouvrant un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 class="dark">Gemmes : 500</h6>
                                   <h6 class="dark">Expérience : 1500</h6>
                                   <hr/>
			                    <button class="btn top-3">Vérifier</button>
		                    </div>
	                    </div>
                         <div class="course">
		                    <div class="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    <a href="#">En savoir plus <i class="fas fa-chevron-right"></i></a>
		                    </div>
		                    <div class="course-info">
			                    <div class="progress-container">
				                    <div class="progress"></div>
				                    <span class="progress-text dark">
					                    0/1 carte légendaire
				                    </span>
			                    </div>
			                    <h6 class="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 class="dark challenge">Obtenir une carte de rareté Légendaire en ouvrant un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 class="dark">Gemmes : 100</h6>
                                   <h6 class="dark">Expérience : 500</h6>
                                   <hr/>
			                    <button class="btn top-3">Vérifier</button>
		                    </div>
	                    </div>
                    </div>
                    </div>
                    
                    </body>
               </>
               
          )
     }
}

export default Chess;

