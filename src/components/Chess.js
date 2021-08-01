import { React, PureComponent } from 'react';
import '../assets/home.scss';
import '../assets/ui.scss';
import 'react-toastify/dist/ReactToastify.css';
import {getUsers, getUser} from '../api/user';
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
          const {user} = this.state
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
               <Modal id="chess" isChess={true} pseudo={this.props.auth[0]}/>
               <body>
                    <div className="bar">
                         <div className="resources">
                              <div className="user-resources">
                                   <span>{this.props.auth[0]}</span><br/>
                                        {user && user[0].etat==='hors-ligne' ? (
                                             <span><div id="inactive"></div>Hors-ligne</span>
                                        ) : (
                                             <span><div id="active"></div>Actif</span>
                                        )}
                              </div>
                              <p className='user-inventory'>{user && user[0].gems} 
                                   <img className="coin" 
                                   src={coin} 
                                   width="40" height="40"
                                   alt=""/>
                              </p>
                         </div>
                    </div>
                    <div className="d-flex-center">
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
                    <div className="courses-container">
	                    <div className="course">
		                    <div className="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    {/* <h6>En savoir plus <i className="fas fa-chevron-right"></i></h6> */}
		                    </div>
		                    <div className="course-info">
			                    <div className="progress-container">
				                    <div className="progress"></div>
				                    <span className="progress-text dark">
					                    0/1 coffre ouvert
				                    </span>
			                    </div>
			                    <h6 className="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 className="dark challenge">Ouvrir au moins un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 className="dark">Gemmes : 50</h6>
                                   <h6 className="dark">Expérience : 250</h6>
                                   <hr/>
			                    <button className="btn top-3">Vérifier</button>
		                    </div>
	                    </div>
                         <div className="course">
		                    <div className="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    {/* <a href="">En savoir plus <i className="fas fa-chevron-right"></i></a> */}
		                    </div>
		                    <div className="course-info">
			                    <div className="progress-container">
				                    <div className="progress"></div>
				                    <span className="progress-text dark">
					                    0/1 carte ultra
				                    </span>
			                    </div>
			                    <h6 className="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 className="dark challenge">Obtenir une carte de rareté Ultra en ouvrant un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 className="dark">Gemmes : 500</h6>
                                   <h6 className="dark">Expérience : 1500</h6>
                                   <hr/>
			                    <button className="btn top-3">Vérifier</button>
		                    </div>
	                    </div>
                         <div className="course">
		                    <div className="course-preview">
			                    <h6>Défi mensuel</h6>
			                    <h4>Les coffres</h4>
			                    {/* <a href="#">En savoir plus <i className="fas fa-chevron-right"></i></a> */}
		                    </div>
		                    <div className="course-info">
			                    <div className="progress-container">
				                    <div className="progress"></div>
				                    <span className="progress-text dark">
					                    0/1 carte légendaire
				                    </span>
			                    </div>
			                    <h6 className="dark strong">Challenge - Coffre</h6>
			                    <br/>
                                   <h6 className="dark challenge">Obtenir une carte de rareté Légendaire en ouvrant un coffre. <br/>En réalisant ce défi, vous gagnerez de l'expérience ainsi que des gemmes supplémentaires</h6>
                                   <h6 className="dark">Gemmes : 100</h6>
                                   <h6 className="dark">Expérience : 500</h6>
                                   <hr/>
			                    <button className="btn top-3">Vérifier</button>
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

