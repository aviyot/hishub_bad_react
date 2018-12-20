import React from 'react';

const orehSec = () => {

   
return (

    <div id="orehTable">

    <div id="orehDiv ">


        <ol id="listOreh">
        </ol>

    </div>
    <div id="totalOrehDiv">
        Total:
<br />
        <label id="totalOreh">0</label>
    </div>
    <div id="savedData">
        Saved:
<br />
        <label id="savedDataLbl">0</label>M
</div>
    <div id="orehBtns">

        <button id="deleteLast" onclick="deleteLastOreh()"> Delete Last</button>
        <button id="clearSaved" onclick="clearSaved()"> Clear Saved </button>


        <button id="saveOreh" onclick="saveOrehBad()">Save
</button>

        <button id="restBtn" onclick="restTotalOreh()">Delete All
</button>


    </div>
</div>


        
)

};

export default orehSec;