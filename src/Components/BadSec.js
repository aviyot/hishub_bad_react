import React from 'react';

const badSec = () => {

    function saveLastBad() {

        var n = document.getElementById("badName").textContent;
        var w = document.getElementById("rohabBad").value;
        var l = document.getElementById("orehGalil").value;
    
        var savedData = { name: n, width: w, length: l };
        localStorage.setItem("selectedBad", JSON.stringify(savedData));
    }
   
    function selectBad() {
        document.getElementById("badName").textContent = document.getElementById("enterNameBad").value;
        document.getElementById("rohabBad").value = document.getElementById("enterWidthBad").value;
        document.getElementById("orehGalil").value = document.getElementById("enterOrehBad").value;
    
        saveLastBad();
        document.getElementById("badSec").style.display = "none";
    }
return (

    <div id="badSec">
    <button id="exitMenuBadBtn" onClick={function () {
        document.getElementById("badSec").style.display = "none";
    }}> X </button>
    <div id="badListDiv">
        <table id="badListTable">
        </table>
    </div>
    <div id="DataEnter">
        <input type="text" id="enterNameBad" placeholder="Name" />
        <input type="number" id="enterWidthBad" placeholder="width" />
        <input type="number" id="enterOrehBad" placeholder="Length" />
        <br />
        <br />
        <button id="saveInLocalStorage">Save</button>
        <button id="deleteInLocalStorage" >delete</button>
        <button id="selectBad" onClick={selectBad} >select</button>

    </div>
</div>

        
)

};

export default badSec;