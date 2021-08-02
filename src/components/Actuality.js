import { PureComponent } from 'react';
import '../assets/home.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/ui.scss';
import '../assets/chess.scss';
import Modal from './Modal';
import secretCard from '../assets/resources/SECRETE.png';
import profilePicture from '../assets/resources/profile.png';
import alertPicture from '../assets/resources/alert.png';
import mobilePicture from '../assets/resources/mobile.png';
import { getUsers } from '../api/user';

// import '../assets/modal.scss';


class Actuality extends PureComponent {
     constructor() {
          super();
          this.state = {
               players: null
          }
          this.listPlayers = []
     }
     componentDidMount = () =>{
          getUsers().then(res=>{
               this.setState({players: res})
               console.log("players ==> ", res)
               this.listOnline(res)
          })
          .catch(error=>{console.log(error)})

          // this.state.players && this.listOnline(this.state.players)
     }

     listOnline(players){
          for (let index = 0; index < players.length; index++) {
               const element = players[index];
               this.listPlayers.push(element.pseudo);
          }
          
     }    

     render() {
          // formulaire
          const majModalContent = "OpenProf est désormais disponible en version Desktop. Nouvelles cartes, coffres, graphismes ! Découvrez dès maintenant de nombreuses surprises"
          const news = "OpenProf sera la dernière version d'OpenProf disponible au public. L'équipe vous remercie pour votre fidelité (merci aux clients fidèles tu connais) et vous souhaite bonne continuation"
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
                    <div className="actual-content">
                         <div class="container">
                              <div class="card">
                                   <div class="box">
                                        <div class="content">
                                             <h2>01</h2>
                                             <h3>Mises à jour</h3>
                                             <p>{majModalContent}</p>
                                             <a href="#popup">En savoir plus</a>
                                        </div>
                                   </div>
                              </div>
                              <Modal imageSide={secretCard} title="Mises à jour" content={majModalContent} id="popup" isChess={false}/>
                         <div class="card">
                              <div class="box">
                                   <div class="content">
                                        <h2>02</h2>
                                        <h3>Ce qui vous attend</h3>
                                        <p>OpenProf Desktop a été l'occasion de régler les bugs observés dans la version iOS (encore sous Beta). Découvrez les nouveautés à travers les différents onglets</p>
                                        <a href="#news">Voir les nouveautés</a>
                                   </div>
                              </div>
                              <Modal imageSide={alertPicture} title="Nouveautés" content={news} id="news" isChess={false}/>
                         </div>

                         <div class="card">
                              <div class="box">
                                   <div class="content">
                                        <h2>03</h2>
                                        <h3>Mon compte</h3>
                                        <p>Une des fonctionnalités majeures d'OpenProf Desktop est la possibilté de gérer son compte, ses informations personnelles et en ligne</p>
                                        <a href="#account">Accéder à mon compte</a>
                                   </div>
                              </div>
                              <Modal imageSide={profilePicture} title="Mon compte" content={"Une des fonctionnalités majeures d'OpenProf Desktop est la possibilté de gérer son compte, ses informations personnelles et en ligne"} id="account" isChess={false}/>
                         </div>
                         <div class="card">
                              <div class="box">
                                   <div class="content">
                                        <h2>04</h2>
                                        <h3>Version mobile</h3>
                                        <p>La version mobile a été mise en pause mais sera bientôt renouvellée pour devenir accessible sur les appareils Android</p>
                                        <a href="#mobile">En savoir plus</a>
                                   </div>
                              </div>
                              <Modal imageSide={mobilePicture} title="Version mobile" content={"La version mobile a été mise en pause mais sera bientôt renouvellée pour devenir accessible sur les appareils Android"} id="mobile" isChess={false}/>
                         </div>
                         
                    </div>
                    
               </div>
               <div class="d-flex-center">
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
                                   <h1>Dashboard</h1>
                                   <ul>
                                        {this.state.players && this.state.players.map((player, index)=>{
                                             <li class="dark">{player.pseudo}</li>
                                        })}
                                   </ul>
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
                                        {/* <div className="cards-carousel">
                                             <img alt="" src={maarouf} width="100" height="120"/>
                                             <img alt="" src={gwen} width="100" height="120"/>
                                             <img alt="" src={alix} width="100" height="120"/>
                                        </div> */}
                                   </div>
                              </div>
                         </div>
                    </div>
                    </div>
               <script   src="https://code.jquery.com/jquery-3.6.0.min.js"   integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="   crossorigin="anonymous"></script>
               {/* <iframe className="trailer" src="https://www.youtube.com/embed/fv2Mq9d-JZg?autoplay=0&controls=0" title="OpenProf Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                          */}
               </>
               
          )
     }
}

export default Actuality;

