import { PureComponent } from 'react';
import '../assets/home.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/ui.scss';
import '../assets/chess.scss';
// import '../assets/modal.scss';
import '../assets/shop.scss';
import pileOfGems from '../assets/pileofgems.png';
import { getUserGems, updateUserGems, updateUserShopFreeGem, getDateUserFreeGem } from '../api/user';
import Clock from './Clock';
// import DateCountdown from 'react-date-countdown-timer';


class Shop extends PureComponent {
     constructor() {
          super();
          this.state = {
			userGems: null,
			counter: false, 
			deadline: "Gratuit",
			userDateGem: null,
		}
		this.timer = 0;
		
		this.setDateCounter = this.setDateCounter.bind(this);
     }
     componentDidMount = () =>{
		console.log("pseudo", this.props.auth)
		this.getItem()
          getDateUserFreeGem(this.props.auth).then(res=>{this.setState({userDateGem: res[0].dateFreeGem})}).catch(error=>console.log(error))
	}

	pad(num) { return ('00'+num).slice(-2) };

	convertDateForSQL(date){
		date = new Date();
		var tomorrow = new Date();
		
		date = date.getUTCFullYear()         + '-' +
        	this.pad(date.getUTCMonth() + 1)  + '-' +
        	this.pad(date.setDate(date.getDate()+1))       + ' ' +
        	this.pad(date.getUTCHours())      + ':' +
        	this.pad(date.getUTCMinutes())    + ':' +
		   this.pad(date.getUTCSeconds());
		return date
	} 

	getItem(){
		getUserGems(this.props.auth).then(res=>{this.setState({userGems: res[0].gem, counter: true})}).catch(error=>{console.warn(error)})
		var _DATA_ = {
			"gems": this.state.userGems + 100
		}
		updateUserGems(this.props.auth && this.props.auth, _DATA_)
		.then(res=>{console.log(res)})
		.catch(error=>{console.log(error)})
	}


	setDateCounter(){
		var today = new Date()
		var tomorrow = new Date()
		tomorrow.setDate(today.getDate()+1)
		tomorrow.setMonth(today.getMonth()+1)
		var month = tomorrow.getMonth().toString()
		var day = tomorrow.getDate().toString()
		// console.log("day test ==> ",a.getDate())
		var year = tomorrow.getFullYear().toString()
		console.log("day", day)

		
		var dl = "" + year+ "-" + "0" + month + "-" + "0" + day
		// this.setState({deadline:dl})
		var dateToSendToDB = this.convertDateForSQL(tomorrow)
		console.log("date w/ day+1 : ", dl);
		updateUserShopFreeGem(this.props.auth, {"date": dl})
			.then(res=>{
				console.log(res)
				updateUserGems(this.props.pseudo, {"gems": this.state.userGems + 100})
				.then(res=>console.log(res))
				.catch(error=>console.log(error))
			})
			.catch(error=>console.log(error))

		console.log(this.convertDateForReactCountdown(dl))
		getDateUserFreeGem(this.props.auth).then(res=>{
			this.setState({userDateGem: this.convertDateForReactCountdown((res[0].dateFreeGem).toString())})
			console.log("USER FREE GEMS MODIFIED : ", this.state.userDateGem)

		}).catch(error=>console.log(error))
	}

	convertDateForReactCountdown(date){

		var new_date = date.split('-')
		var year = new_date[0]
		var month = new_date[1]
		var day = new_date[2]
		switch (month) {
			case "01":
			month = "January"
			break;
			case "02":
			month = "February"
			break;
			case "03":
			month = "March"
			break;
			case "04":
			month = "April"
			break;
			case "05":
			month = "May"
			break;
			case "06":
			month = "June"
			break;
			case "07":
			month = "July"
			break;
			case "08":
			month = "August"
			break;
			case "09":
			month = "September"
			break;
			case "10":
			month = "October"
			break;
			case "11":
			month = "November"
			break;
			case "12":
			month = "December"
			break;
			default:
				break;
		}
		var date_render = month + ", " + day + ", " + year
		return date_render
		
	}

     render() {
          return(
          <main>
               <body class="pt-3 push-to-front">
                    <section class="product">
	                    <div class="product__photo top-3">
		                    <div class="photo-container">
			                    <div class="photo-main">
				                    <img src="https://findicons.com/files/icons/2315/default_icon/256/media_repeat_alt_inv.png" alt="green apple slice"/>
			                    </div>
		                    </div>
	                    </div>
	                    <div class="product__info">
		                    <div class="title">
			                    <h1>Échantillon de gems</h1>
			                    <span>Quotidien</span>
		                    </div>
		                    <div class="price">
			                    <span>100</span>
		                    </div>
		                    <div class="variant">
			                    <h3>Notes</h3>
                                   <span>Chaque jour, venez récupérer votre récompense quotidienne !</span>
		                    </div>
						{/* {!this.state.counter && this.state.deadline==="Gratuit" ? (
							<button class="buy--btn top-3" onClick={()=>{this.setDateCounter()}} disabled={this.state.counter}>Gratuit</button>
						) : (
							<button class="buy--btn top-3" onClick={()=>{this.setDateCounter()}} disabled={this.state.counter}><Clock deadline={this.state.deadline} /></button>
						)} */}
						{this.state.userDateGem === null ? (
							<button class="buy--btn top-3" onClick={()=>{this.setDateCounter()}}>Gratuit</button>
						) : (
							<button class="buy--btn top-3" disabled><Clock deadline={this.state.userDateGem}/></button>
						)}
						{/* <button class="buy--btn top-3" onClick={()=>{this.setDateCounter()}}>Gratuit</button> */}
						
						
						
		                    
	                    </div>
                    </section>
                    <section class="product">
	                    <div class="product__photo top-3">
		                    <div class="photo-container">
			                    <div class="photo-main" id="bag_gems">
				                    <img src="https://www.pikpng.com/pngl/b/130-1309872_sack-of-gems-gold-sack-png-clipart.png" alt="green apple slice"/>
			                    </div>
		                    </div>
	                    </div>
	                    <div class="product__info">
		                    <div class="title">
			                    <h1>Coffre de gems</h1>
			                    <span>COD: 63940</span>
		                    </div>
		                    <div class="price" id="bag_gems_text">
			                    <span>500</span>
		                    </div>
		                    <div class="variant">
			                    <h3>Important</h3>
                                   <span>Dès réception et confirmation de l'achat, les gems seront automatiquement versés sur votre compte et utilisables dans l'onglet Coffres</span>
		                    </div>
		                    <button class="buy--btn top-3" id="bag_gems">3.99€</button>
	                    </div>
                    </section>
                    <section class="product bottom-3">
	                    <div class="product__photo top-3">
		                    <div class="photo-container">
			                    <div class="photo-main" id="pile_of_gems">
				                    <img src={pileOfGems} alt="green apple slice"/>
			                    </div>
		                    </div>
	                    </div>
	                    <div class="product__info">
		                    <div class="title">
			                    <h1>Conteneur de gems</h1>
			                    <span>COD: 52733</span>
		                    </div>
		                    <div class="price" id="pile_of_gems_text">
			                    <span>1000</span>
		                    </div>
		                    <div class="variant">
			                    <h3>Important</h3>
                                   <span>Dès réception et confirmation de l'achat, les gems seront automatiquement versés sur votre compte et utilisables dans l'onglet Coffres</span>
		                    </div>
		                    <button class="buy--btn top-3" id="pile_of_gems">8.99€</button>
	                    </div>
                    </section>
               </body>
          </main>
          )
          // formulaire
     }
}

export default Shop;

