import { React, PureComponent } from 'react';
import '../assets/home.scss';
import '../assets/ui.scss';
import 'react-toastify/dist/ReactToastify.css';
import {getUsers, getUser, getUserGems} from '../api/user';
import Modal from './Modal';
import '../assets/chess.scss';
import chest from '../assets/resources/chest.png';
import alix from '../assets/resources/ALIX.png';
import maarouf from '../assets/resources/MAROUF.png';
import gwen from '../assets/resources/GWEN.png';
import coin from '../assets/resources/gem.png';


class Chess extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {
               users: null,
               user: null,
               userGems: null, 
               pseudo: window.location.pathname.split('/')[2]
          }
     }
     componentDidMount = () =>{
          getUsers().then((res) => {
               this.setState({ users: res })
               console.log("RES --> ", res)
          }).catch((error) => { console.log(error) })
          getUserGems(this.state.pseudo).then(res=>{this.setState({userGems: res[0].gems})}).catch(error=>{console.log(error)})
          // getUser(this.props.auth[0]).then(res=>{this.setState({user: res, pseudo:res[0].pseudo}); console.log("user", res)}).catch(error=>console.log(error))
          // getUserGems(this.props.auth[0]).then(res=>{this.setState({userGems: res[0].gems})}).catch(error=>{console.log(error)})
          // console.log("QUERY URI",window.location.pathname.split('/')[2])
     }

     loadNetworkUser(pseudo){
          // pseudo && getUserGems(pseudo).then(res=>{this.setState({userGems: res[0].gems}); console.log("user gems", res)}).catch(error=>console.log(error))  
          window.location.reload(false);
          // getUserGems(this.state.pseudo).then(res=>{this.setState({userGems: res[0].gems})}).catch(error=>{console.log(error)})
     }

     

     render() {
          // formulaire
          const {user, userGems} = this.state
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
               <Modal id="chess" isChess={true} pseudo={this.state.pseudo && this.state.pseudo} loadGems={this.loadNetworkUser}/>
               <body>
                    <div className="bar">
                         <div className="resources">
                              <div className="user-resources">
                                   <span>{this.state.pseudo}</span><br/>
                                        {user && user[0].etat==='hors-ligne' ? (
                                             <span><div id="inactive"></div>Hors-ligne</span>
                                        ) : (
                                             <span><div id="active"></div>Actif</span>
                                        )}
                              </div>
                              <p className='user-inventory'>{userGems} 
                                   <img className="coin" 
                                   src={coin} 
                                   width="40" height="40"
                                   alt=""/>
                              </p>
                         </div>
                    </div>
                    <div className="d-flex-center">
                         <div class="main top-3 " id="main">
                         <div class="form-container sign-up-container">
                              <form action="#" >
                                   {/* {connexionToast} */}
                                   <h1>Create Account</h1>
                                   <div class="social-container">
                                        <a href="#social" class="social"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#social" class="social"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#social" class="social"><i class="fab fa-linkedin-in"></i></a>
                                   </div>
                              </form>
                         </div>
                         <div class="form-container sign-in-container" >
                              <form action="#" className="chest-container">
                                   <a className="openChest top-3" href="#chess">
                                        <img alt="" src={chest} width="300" height="300"/>
                                   </a>
                                   {/* <input type="email" placeholder="Identifiant OpenProf" onChange={this.emailListener} />
                                   <input type="password" placeholder="Mot de passe" onChange={this.passwordListener}/>
                                   {/* <a href="#">Forgot your password?</a> */}
                                   {/* <button disabled={(emailCorrect && passwordCorrect) ? false : true} onClick={this.onSubmit}>Se connecter</button> */} 
                              </form>
                         </div>
                         <div class="overlay-container">
                              <div class="overlay">
                                   <div class="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button class="ghost" id="signIn">Sign In</button>
                                   </div>
                                   <div class="overlay-right chest-overlay">
                                        <div className="cards-carousel">
                                             <img alt="" src={maarouf} width="100" height="120"/>
                                             <img alt="" src={gwen} width="100" height="120"/>
                                             <img alt="" src={alix} width="100" height="120"/>
                                        </div>
                                   </div>
                              </div>
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
			                    <button className="btn top-3" disabled>Vérifier (en cours de développement)</button>
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
			                    <button className="btn top-3" disabled>Vérifier (en cours de développement)</button>
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
			                    <button className="btn top-3" disabled>Vérifier (en cours de développement)</button>
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

