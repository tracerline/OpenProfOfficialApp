import { React, PureComponent } from 'react';
import '../assets/login.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUsers, createUser } from '../api/user';
import Login from './Login';


class Signin extends PureComponent {
     constructor() {
          super();
          this.state = {
               emailCorrect: false,
               passwordCorrect: false,
               pseudoCorrect: false,
          }
          this.emailListener = this.emailListener.bind(this)
          this.passwordListener = this.passwordListener.bind(this)
          this.formLogin = [
               { email: null, password: null, pseudo: null }
          ]
          this.signIn = this.signIn.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
     }
     componentDidMount = () => {
          getUsers().then((res) => {
               this.setState({ users: res })
               console.log("RES --> ", res)
          }).catch((error) => { console.log(error) })
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

     pseudoListener = e => {
          console.log(e.target.value)
          if (e.target.value === "" || e.target.value === null) {
               this.setState({
                    pseudoCorrect: false
               })

          } else {
               this.setState({
                    pseudoCorrect: true
               })
          }
          this.formLogin.pseudo = e.target.value
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
          // const { users } = this.state
          e.preventDefault()
          const __DATA__ = {
               email: this.formLogin && this.formLogin.email,
               password: this.formLogin && this.formLogin.password,
               pseudo: this.formLogin && this.formLogin.pseudo
          }
          var verification = this.signIn(__DATA__)
          if (verification) {
               this.setState({ isRedirected: true })
               toast.dark("Inscription réussie")
          } else {
               toast.warn("Inscription impossible")
               this.setState({ isRedirected: false })
          }

     }

     signIn(data) {
          var canLog = false
          createUser(data).then(()=>{
               canLog=true
               toast.success("Compte créé !") && this.setState({isRedirected: true})
          }).catch(error=>{
               canLog = false
               toast.error("Impossible de créer le compte")
               console.log(error)
               this.setState({isRedirected: false})
          })
          return canLog
          // users.map(user => {
          //      if ((user.email == this.formLogin.email) && (user.password == this.formLogin.password)) {
          //           canConnect = true
          //      }
          // })
     }

     createAccount = e =>{
          e.preventDefault();
          var __DATA__ = 
          {
               "pseudo": this.formLogin.pseudo,
               "email": this.formLogin.email,
               "password": this.formLogin.password
          }
          this.signIn(__DATA__)
     }

     render() {
          // formulaire
          const { isRedirected } = this.state
          return (
               <>
               {!isRedirected ? (
               <div className="login-form">
                    
                    <>
                    <form action="/">
                         <div className="form-group">
                              <p><input type="text" className="input-cst" placeholder="Pseudo (5 caractères minimum requis)" name="signin_pseudo_user" onChange={this.pseudoListener} required minLength="5"></input></p>
                              <p><input type="email" className="input-cst" placeholder="Adresse e-mail" name="signin_email_user" onChange={this.emailListener} required></input></p>
                              <p><input type="password" className="input-cst" name="signin_password_user" placeholder="Mot de passe" onChange={this.passwordListener} minLength="8" required></input></p>
                         </div>
                         <button className="btn-cst" type="submit" onClick={this.createAccount}>Créer un compte</button>
                         <button className="btn-cst" type="submit">Se connecter</button>
                    </form>
                    </>
                    
                    

               </div>
               ) : (<Login />)
          
               }
          </>
          )}
}

export default Signin;

