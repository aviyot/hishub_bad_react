import React from 'react';
import SheeritSec from './SheeritSec';

const controlBtns = () => {

    
function showUserData() {

    var x = document.getElementById("opthionData");

    var userDataDisplay = document.getElementById("userData");


    if (userDataDisplay.style.display === "none") {

        document.getElementById("userData").style.display = "flex";
        document.getElementById("sheeritSection").style.display = "none";
        document.getElementById("orehTable").style.display = "none";
    }
    else {

        if (x.style.display === "none")
            x.style.display = "block";
        else
            x.style.display = "none";

    }


}


const showSheerit = () => {
        
    document.getElementById("userData").style.display = "none";
    document.getElementById("sheeritSection").style.display = "block";
    document.getElementById("orehTable").style.display = "none";
    document.getElementById("showUserData").style.display = "block";

}
   

const showOreh= () => {
        
    document.getElementById("userData").style.display = "none";
    document.getElementById("sheeritSection").style.display = "none";
    document.getElementById("orehTable").style.display = "block";
    document.getElementById("showUserData").style.display = "block";

}
return (
    <div id="buttons">
    <button id="hashebSheeritBtn" onClick = {showSheerit}> SHERIT</button>
    <button id="showUserData" onClick ={showUserData}> DATA</button>
    <button id="hashebOreh"  onClick = {showOreh} >OREH</button>
</div>
        
)

};

export default controlBtns;