import { PureComponent } from 'react';
import '../assets/home.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/ui.scss';
import '../assets/chess.scss';
// import '../assets/modal.scss';
import '../assets/shop.scss';
import pileOfGems from '../assets/pileofgems.png';
import { getUserGems, updateUserGems } from '../api/user';
import Countdown from 'react-countdown';


class Shop extends PureComponent {
     constructor() {
          super();
          this.state = {
			userGems: null,
			counter: false, 
			textTime: "Gratuit",
			time: {}, 
			seconds: 500000
		}
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
    		this.countDown = this.countDown.bind(this);
     }
     componentDidMount = () =>{
          
	}
	
	secondsToTime(secs){
		let hours = Math.floor(secs / (60 * 60));
	 
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);
	 
		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);
	 
		let obj = {
		  "h": hours,
		  "m": minutes,
		  "s": seconds
		};
		return obj;
	   }

	   componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	   }
	 
	   startTimer() {
		if (this.timer == 0 && this.state.seconds > 0) {
		  this.timer = setInterval(this.countDown, 1000);
		}
	   }
	 
	   countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
		  time: this.secondsToTime(seconds),
		  seconds: seconds,
		});
		
		// Check if we're at zero.
		if (seconds == 0) { 
		  clearInterval(this.timer);
		}
	   }

	getItem(){
		getUserGems().then(res=>{this.setState({userGems: res[0].gem, counter: true})}).catch(error=>{console.warn(error)})
		var _DATA_ = {
			"gems": this.state.userGems + 100
		}
		updateUserGems(this.props.auth && this.props.auth, _DATA_)
		.then(res=>{console.log(res)})
		.catch(error=>{console.log(error)})

	
		
          // Update the count down every 1 second
          
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
						{!this.state.counter && (
							<button class="buy--btn top-3" onClick={this.startTimer} disabled={this.state.counter}>{this.state.time.m}min {this.state.time.s}s </button>
						)}
		                    
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

