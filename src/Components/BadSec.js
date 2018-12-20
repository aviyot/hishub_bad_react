import React from 'react';

const badSec = () => {

   
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
        <button id="selectBad" >select</button>

    </div>
</div>

        
)

};

export default badSec;