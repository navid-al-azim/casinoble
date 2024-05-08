import React from 'react';

import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import MobileCasino from "./Components/Casino/MobileCasino";
import NewCasino from "./Components/Casino/NewCaisno";
import BestOnlineCasino from "./Components/Casino/BestOnlineCasino";
import BestPayouts from "./Components/Casino/BestPayouts";

import { BrowserRouter as Router } from 'react-router-dom';
import Esport from './Components/Casino/Esport';
import FreeBetting from './Components/Casino/FreeBetting';
import SportsBetting from './Components/Casino/SportsBetting';
import Baccarat from './Components/Casino/Baccarat';
import Blackjack from './Components/Casino/Blackjack';
import Slots from './Components/Casino/Slots';
import Interac from './Components/Casino/Interac';
import ApplePay from './Components/Casino/ApplePay';
import GooglePay from './Components/Casino/GooglePay';
import Mastercard from './Components/Casino/Mastercard';
import FreeSpin from './Components/Casino/FreeSpin';
import NoDeposit from './Components/Casino/NoDeposit';
import Cashback from './Components/Casino/Cashback';





function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/mobilecasino":
      component = <MobileCasino />
      break 
    case "/newcasino":
      component = <NewCasino />
      break
    case "/bestonlinecasino":
      component = <BestOnlineCasino />
      break
    case "/bestpayoutcasino":
      component = <BestPayouts />
      break
    case "/esport":
      component = <Esport />
      break 
    case "/freebetting":
      component = <FreeBetting />
      break
    case "/sportsbetting":
      component = <SportsBetting />
      break
    case "/baccarat":
      component = <Baccarat />
      break
    case "/blackjack":
      component = <Blackjack />
      break
    case "/slots":
      component = <Slots />
      break
    case "/interac":
      component = <Interac />
      break
    case "/applepay":
      component = <ApplePay />
      break
    case "/googlepay":
      component = <GooglePay />
      break
    case "/mastercard":
      component = <Mastercard />
      break
    case "/freespin":
      component = <FreeSpin />
      break
    case "/nodeposit":
      component = <NoDeposit />
      break 
    case "/cashback":
      component = <Cashback />
      break
  }
  return (
    <>
    <Router>
      <Navbar />
    </Router>
    {component}
    </>
    

  );
}

export default App;
