import React, { Component } from 'react';
import './App.css';
import './ListFun.js';
import UserData from './Components/UserData/UserData';
import BadSec  from './Components/BadSec';
import ClientSec  from './Components/ClientSec';
import ControlBtns  from './Components/ControlBtns';
import MenuToData  from './Components/MenuToData';
import OrderData  from './Components/OrderData.';
import OrehSec  from './Components/OrehSec';
import SheeritSec  from './Components/SheeritSec';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
       // this.handleChange = this.handleChange.bind(this);


    
      }

    render() {

        return (

            <div id="mainApp">
              <UserData/>
              <ControlBtns/>
              <BadSec/>
              <SheeritSec/>
              <OrehSec/>
              <ClientSec/>
              <MenuToData/>
              <OrderData/>
            </div>

        );
    }
}

export default App;
