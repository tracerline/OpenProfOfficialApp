import { React, PureComponent } from 'react';
import '../assets/login.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUsers, updateUser } from '../api/user';
import Home from './Home';
import Signin from './Signin';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/form.scss';
import '../assets/home.scss';
// import useSound from 'use-sound';
// import clickSound from '../audio/click.mp3';


class Login extends PureComponent {
     constructor() {
          super();
          this.state = {
               emailCorrect: false,
               passwordCorrect: false,
               connexionToast: false,
               users: null,
               isRedirected: false,
               accountUserIfValid: [],
               wantToSignIn: false,
          }
          this.emailListener = this.emailListener.bind(this)
          this.passwordListener = this.passwordListener.bind(this)
          this.formLogin = [
               { email: null, password: null }
          ]
          this.verifyConnexion = this.verifyConnexion.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.connection = this.connection.bind(this);
     }
     componentDidMount = () => {
          getUsers().then((res) => {
               this.setState({ users: res })
               console.log("RES --> ", res)
          }).catch((error) => { console.log(error) })
          // if(!this.state.isRedirected){
          //      toast.dark("Vous êtes désormais déconnecté");
          // }
     }

     emailListener = e => {
          console.log(e.target.value)
          if (e.target.value === "" || e.target.value === null) {
               this.setState({
                    emailCorrect: false
               })

          } else {
               this.setState({
                    emailCorrect: true
               })
          }
          this.formLogin.email = e.target.value
     }

     passwordListener = e => {
          if (e.target.value.length <= 7) {
               this.setState({
                    passwordCorrect: false
               })
          } else {
               this.setState({
                    passwordCorrect: true
               })
          }
          this.formLogin.password = e.target.value
     }
     onSubmit = e => {
          const { users } = this.state
          e.preventDefault()
          // const __DATA__ = {
          //      email: this.formLogin && this.formLogin.email,
          //      password: this.formLogin && this.formLogin.password
          // }
          this.setState({
               connexionToast: (<ToastContainer />)
          })
          var verification = this.verifyConnexion(users)
          if (verification) {
               console.log("Okkkkk")
               this.setState({ isRedirected: true, accountUserIfValid: [this.formLogin.email, this.formLogin.password] })
               // toast.success("Connexion réussie")
          } else {
               toast.dark("Aucun compte trouvé avec l'email " + this.formLogin.email)
               this.setState({ isRedirected: false })
          }
          this.connection(this.formLogin.email, {"pseudo": this.formLogin.email, "etat": "En ligne"})

     }

     verifyConnexion(users) {
          var canConnect = false
          getUsers().then((res) => { this.setState({ users: res }) }).catch((error) => { console.log(error) })
          users.map(user => {
               if ((user.email === this.formLogin.email) && (user.password === this.formLogin.password)) {
                    canConnect = true
               }
          })
          return canConnect
     }

     createAccount = e =>{
          e.preventDefault();
     }

     connection(pseudo){
          var __data__ = {
               "pseudo": pseudo,
               "etat": "Actif"
          }
          updateUser(pseudo, __data__)
          .then(
               res=>{
                    toast.dark("Bienvenue sur OpenProf Web Édition !")
                    console.log(res)
               }
          )
          .catch(
               error=>{
                    toast.dark("Une erreur est survenue lors de la déconnexion")
                    console.log(error)
               }
          )
     }

     render() {
          // formulaire
          const { emailCorrect, passwordCorrect, connexionToast, isRedirected, wantToSignIn } = this.state
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
               {/* <audio autoPlay loop>
                    <source src={bckSound} type="audio/mpeg"/>
               </audio> */}
               {!isRedirected && !wantToSignIn && (
                    
                         
                              
          
                    <div class='body'>    
                    <div class="main" id="main">
                    <div class="form-container sign-up-container">
                         <form action="#">
                              {connexionToast}
                              <h1>Create Account</h1>
                              <div class="social-container">
                                   <a href="#social" class="social"><i class="fab fa-facebook-f"></i></a>
                                   <a href="#social" class="social"><i class="fab fa-google-plus-g"></i></a>
                                   <a href="#social" class="social"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                         </form>
                    </div>
                    <div class="form-container sign-in-container">
                         <form action="#">
                              <h1 class="dark">Connexion</h1>
                              <div class="social-container">
                                   <h5 class="dark muted">Une connexion internet moyenne est le minimum requis pour une utilisation optimale de OpenProf</h5>
                              </div>
                              <span>or use your account</span>
                              <input type="email" placeholder="Email" onChange={this.emailListener} />
                              <input type="password" placeholder="Password" onChange={this.passwordListener}/>
                              {/* <a href="#">Forgot your password?</a> */}
                              <button disabled={(emailCorrect && passwordCorrect) ? false : true} onClick={this.onSubmit}>Se connecter</button>
                         </form>
                    </div>
                    <div class="overlay-container">
                         <div class="overlay">
                              <div class="overlay-panel overlay-left">
                                   <h1>Welcome Back!</h1>
                                   <p>To keep connected with us please login with your personal info</p>
                                   <button class="ghost" id="signIn">Sign In</button>
                              </div>
                              <div class="overlay-panel overlay-right">
                                   {/* <h1>OpenProf - Web Édition</h1>
                                   <p>Bienvenue sur OpenProf ! Connectez-vous pour accéder à l'interface de jeu</p>
                                   <button class="ghost" id="signUp">Sign Up</button> */}
                              </div>
                         </div>
                    </div>
               </div>
               </div> 
               )}
               {isRedirected && !wantToSignIn && (
                    <Home account={this.state.accountUserIfValid} isConnected={this.state.isRedirected} auth={[this.formLogin.email, this.formLogin.password]}/>
               )}
               {!isRedirected && wantToSignIn && (
                   <Signin /> 
               )}
          </>
          )}
}

export default Login;

