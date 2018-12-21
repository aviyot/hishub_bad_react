import React from 'react';

const clientSec = (props) => {

   
return (


    <div id="clientSec">
    <button id="exitClientBtn" onClick={
        function () {
            document.getElementById("clientSec").style.display = "none";
        }
    }>X</button>
    <div id="clientDiv">
        <table id="clientList">
        </table>
    </div>
    <div id="EditShowClient">
        <input type="text" id="enterclientName" value="" placeholder="Client" />
        <input type="number" id="enterTel" value= {props.clientList[0].clientName} placeholder="Tel " />
        <input type="text " id="enterStreet" value="" placeholder="Street " />
        <br />
        <br />
        <button id="saveDataLocal" >Save</button>
        <button id="deleteDataLocal">delete</button>
        <button id="selectClient" >select</button>

    </div>
</div>
        
)

};

export default clientSec;