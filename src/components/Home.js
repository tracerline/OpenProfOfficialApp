import { PureComponent } from 'react';
import '../assets/home.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateUser} from '../api/user';
import Actuality from './Actuality';
import Chess from './Chess';
import Loader from './Loader';
import Cards from './Cards';
import { Redirect } from 'react-router-dom';
import Shop from './Shop';
import bckSound from '../audio/freakshow.mp3';

class Home extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {
               currentItem: null,
               redirect: false,
          }
          this.deconnect = this.deconnect.bind(this);
     }
     componentDidMount = () =>{
          // toast.dark("Bienvenue sur OpenProf !")
          console.log(this.props)
     } 

     
     deconnect(pseudo){
          if(pseudo != null || pseudo != undefined){
               this.setState({currentItem: 5, redirect: true})
               var __data__ = {
                    "etat": "hors-ligne",
                    "pseudo": pseudo
               }
               updateUser(pseudo, __data__)
               .then(
                    res=>{
                         toast.dark("Vous êtes désormais déconnecté")
                         console.log(res)
                         this.setState({redirect: true})
                    }
               )
               .catch(
                    error=>{
                         toast.error("Une erreur est survenue lors de la déconnexion")
                         console.log(error)
                    }
               )
               this.props.history.push('/login')
               // toast.dark('Déconnexion réussie')
          }else{
               
               var __data__ = {
                    "pseudo": pseudo,
                    "etat": "hors-ligne"
               }
               toast.dark("Déconnexion des serveurs OpenProf, veuillez patienter...")
               updateUser(window.location.pathname.split('/')[2], __data__)
               .then(
                    res=>{
                         // toast.dark("Vous êtes désormais déconnecté")
                         console.log(res)
                         this.setState({redirect: true})
                         setTimeout(() => { 
                              this.props.history.push('/');
                              }, 5000)
                    }
               )
               
          }
          
          
     }
     
     render() {
          // formulaire
          // toast.success("Vous êtes désormais connecté !")
          // try {
               const {currentItem} = this.state
          return (
               <>
               
               
                    <main onkeydown="return (event.keyCode != 116)" className="row">
                    <audio autoPlay loop>
                         <source src={bckSound} type="audio/mpeg"/>
                    </audio>
                    <aside className="sidebar col-lg-4">
                         <nav className="nav">
                              <ul>
                                   <li className={currentItem===0 && 'active'} onClick={()=>{this.setState({currentItem: 0})}}><a>Actualité</a></li>
                                   <li className={currentItem===1 && 'active'} onClick={()=>{this.setState({currentItem: 1})}}><a>Coffres</a></li>
                                   <li className={currentItem===2 && 'active'} onClick={()=>{this.setState({currentItem: 2})}}><a>Inventaire</a></li>
                                   <li className={currentItem===3 && 'active'} onClick={()=>{this.setState({currentItem: 3})}}><a>Boutique</a></li>
                                   <li className={currentItem===4 && 'active'} onClick={()=>{this.setState({currentItem: 4})}}hidden><a>Online</a></li>
                                   <li className={currentItem===5 && 'active'}><span onClick={()=>this.deconnect(window.location.pathname.split('/')[2])}>Déconnexion</span></li>
                              </ul>
                         </nav>
                    </aside>
                    { this.state.redirect ? (<Redirect push to="/home"/>) : null }
                    <section className="col-lg-8" id="waiter-area">
                         {currentItem===null &&(
                              <Loader />
                         )}
                         {/* <div className="home">
                              <h1>accueil</h1>
                              <p className='muted'>Bienvenue sur OpenWeb{this.props.account[0].charAt(0). toUpperCase() + this.props.account[0].slice(1)} ! <br/>
                              Depuis la version mobile, l'équipe de développeur <br/> n'a cessé de travailler pour produire la version Windows/Mac & Linux d'OpenProf</p>
                         </div> */}
                         {currentItem===0 && (
                              <Actuality />
                         )}
                         {currentItem===1 && (
                              <Chess auth={this.props.location && this.props.location.state && this.props.location.state.auth}/>
                         )}
                         {currentItem===2 && (
                              <Cards auth={window.location.pathname.split('/')[2]}/>
                         )}
                         {currentItem===3 && (
                              <Shop auth={window.location.pathname.split('/')[2]}/>
                         )}
                         

                    </section>
               </main>
              
               </>
          )
          // } catch (error) {
          //      return(
          //           <>
          //           {
          //           setTimeout(() => { 
          //                for (let index = 0; index < 1; index++) {
          //                     toast.error("Erreur d'authentification. Veuillez vous reconnecter...");      
          //                }
          //                this.props.history.push('/');
                         
          //            }, 5000)}
          //           <Loader />
          //           </>
          //      )
          // }
          
     }
}

export default Home;

