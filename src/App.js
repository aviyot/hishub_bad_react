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


var hibur;
var kant;
var hebel;
var totalOreh = 0;
var volan;
var oreh = 0;
var mySherit;
var rohabBad;
var rohabMida;
var orehMida;
var rohabimSleminAndSheerit;
var shelem;
var sher;
var kipulHebel = 30;
var sharvul;
var orehGalil;
var orehArray = [];
var saveData = 0;
var z = 1;
var sherLitleSimtri;
var sherBigSimtri;
var SherSide;
var sherEqulAll;
var rohabimSleminAndSheeritWitnOutSherit;
var sherWithOutSherit;
var shelemWithOutSherit;

function getData() {
mySherit = Number(document.getElementById("mySherit").value);
rohabMida = Number(document.getElementById("rohabMida").value);
rohabBad = Number(document.getElementById("rohabBad").value);
orehMida = Number(document.getElementById("orehMidaInput").value);
volan = Number(document.getElementById("volan").value);
sharvul = Number(document.getElementById("sharvul").value);
hibur = Number(document.getElementById("hibur").value);
orehGalil = Number(document.getElementById("orehGalil").value);
kant = Number(document.getElementById("kant").value);
hebel = Number(document.getElementById("hebel").value);


rohabimSleminAndSheerit = 0;
rohabimSleminAndSheerit = (rohabMida + kant - mySherit) / (rohabBad - hibur);
rohabimSleminAndSheeritWitnOutSherit = (rohabMida + kant) / (rohabBad - hibur);

shelem = Math.floor(rohabimSleminAndSheerit);
sher = Math.round((rohabimSleminAndSheerit - shelem) * (rohabBad - hibur));

shelemWithOutSherit = Math.floor(rohabimSleminAndSheeritWitnOutSherit);
sherWithOutSherit = Math.round((rohabimSleminAndSheeritWitnOutSherit - shelem) * (rohabBad - hibur));


if (shelem === 0)
 z = 0;

}


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
