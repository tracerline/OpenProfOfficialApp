import { PureComponent } from 'react';
import '../assets/home.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/ui.scss';
import '../assets/chess.scss';
import Modal from './Modal';
import secretCard from '../assets/resources/SECRETE.png';
// import '../assets/modal.scss';
import '../assets/shop.scss';
import pileOfGems from '../assets/pileofgems.png';


class Shop extends PureComponent {
     constructor() {
          super();
          this.state = {
          }
     }
     componentDidMount = () =>{
          
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
		                    <button class="buy--btn top-3">Gratuit</button>
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

