import React from 'react';
import SheeritSec from './SheeritSec';

const controlBtns = () => {

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
   

const showSheerit = () => {


getData();

if (rohabMida > 0) {

    document.getElementById("userData").style.display = "none";
    document.getElementById("sheeritSection").style.display = "block";
    document.getElementById("orehTable").style.display = "none";
    document.getElementById("showUserData").style.display = "block";

    if (mySherit > 0)
        sher = sher + hibur;

    sherLitleSimtri = (sherWithOutSherit + hibur) / 2;
    sherBigSimtri = (sherWithOutSherit + rohabBad) / 2;
    sherEqulAll = (rohabBad * shelemWithOutSherit + sherWithOutSherit) / (shelemWithOutSherit + 1);

    document.getElementById("op1Shalem").innerHTML = rohabBad + " X " + shelem;
    document.getElementById("op1InR").innerHTML = sher;
    document.getElementById("op1InL").innerHTML = mySherit;

    document.getElementById("op2Shalem").innerHTML = rohabBad + " X " + shelem;
    document.getElementById("op2InL").innerHTML = sherLitleSimtri;
    document.getElementById("op2InR").innerHTML = sherLitleSimtri;

    document.getElementById("op3Shalem").innerHTML = rohabBad + " X " + (shelem - 1);
    document.getElementById("op3InL").innerHTML = sherBigSimtri;
    document.getElementById("op3InR").innerHTML = sherBigSimtri;

    document.getElementById("op4Shalem").innerHTML = sherEqulAll.toFixed(1) + " X " + (shelem + 1);
    document.getElementById("op4InL").innerHTML = "----";
    document.getElementById("op4InR").innerHTML = "----";

   // document.getElementById("hashebSheeritBtn").addEventListener("click", drawRealSizeSampleOneSide);
}//end of "if"

else
    alert("Enter width");


}//End of sheerit


   

const showOreh= () => {
    
        getData();
    
        if (orehMida > 0) {
    
            if (document.getElementById("orehTable").style.display === "none") {
    
                document.getElementById("orehTable").style.display = "block";
                document.getElementById("sheeritSection").style.display = "none";
    
    
            }
    
    
            var orehDisplayStatus = document.getElementById("userData").style.display;
    
            if (orehDisplayStatus !== "none") {
    
                document.getElementById("orehTable").style.display = "block";
                document.getElementById("sheeritSection").style.display = "none";
                document.getElementById("userData").style.display = "none";
                document.getElementById("showUserData").style.display = "block";
    
                var one = 0;
                if (sher > 25)
                    one = 1;
    
                var tmpShalem = shelem;
                if (document.getElementById("exitSheerit").checked === true)
                    tmpShalem--;
    
    
    
                var tfiraOption = document.getElementById("tfiraOption").value;
    
                if (orehMida > 0) {
    
                    if (tfiraOption === "plata")
                        oreh = (orehMida) * (tmpShalem + one);
    
                    if (tfiraOption === "awings") {
    
                        if (volan > 0) {
                            if (document.getElementById("sugGali").value === "kipul")
                                oreh = (orehMida + volan + kipulHebel + hebel * 3) * (tmpShalem + one);
                            else
                                oreh = (orehMida + volan + hebel * 3) * (tmpShalem + one);
                        }
    
                        else
                            oreh = (orehMida + hebel * 2) * (tmpShalem + one);
                    }
    
    
                    if (tfiraOption === "nofelet")
                        oreh = (orehMida + hebel + sharvul + kipulHebel) * (tmpShalem + one);
    
                    if (tfiraOption === "nofeletWithVolan") {
                        if (document.getElementById("sugGali").value === "kipul")
                            oreh = (orehMida + hebel * 2 + sharvul + kipulHebel + volan) * (tmpShalem + one);
                        else
                            oreh = (orehMida + hebel * 2 + sharvul + volan) * (tmpShalem + one);
    
                    }
                }
    
                orehArray.push(oreh);
                var x = ((oreh) / (tmpShalem + one)) / 1000;
                totalOreh = totalOreh + oreh;
    
                var nodeLi = document.createElement("LI");
                var tx = document.createTextNode(x + " X " + (tmpShalem + one) + " = " + (oreh / 1000) + "M");
                nodeLi.appendChild(tx);
                document.getElementById("listOreh").appendChild(nodeLi);
    
                document.getElementById("totalOreh").innerHTML = (totalOreh / 1000) + "M";
    
            }
    
        }//end if (orehMida > 0)
        else
            alert("Enter Length");
    
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