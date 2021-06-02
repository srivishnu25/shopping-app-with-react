import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/banner/banner.js';
import Footer from './components/Footer/FooterBar';
import Cards from './components/card/card.js';
import Apii from './commonData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts:[]
      }
  }
  render() { 
    const {catalogEntryView,...rest} = Apii;
    return ( 
      
      <div className="App">
    <Navbar cartCount={this.state.cartProducts.length} />
     <Banner />
     <div className="cardsblock">
       {catalogEntryView.map((item)=><Cards item={item}
       addProduct={(product)=>
       this.setState({ cartProducts:[...this.state.cartProducts,product]})}/>) }
    </div>
     <Footer/>
       </div>
     );
  }
}
 
export default App;

// const App =()=>{
//       const {catalogEntryView,...rest} = Apii;
      
//   return(
//     <div className="App">
//     <Navbar />
//     <Banner />
//     <div className="cardsblock">
//       {catalogEntryView.map((item)=><Cards item={item}/>) }
//     </div>
//     <Footer/>
//     </div>
    
//   )
// }
//  export default App;

 



