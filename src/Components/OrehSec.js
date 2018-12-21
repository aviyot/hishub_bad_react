import React from 'react';

const orehSec = () => {


    function deleteLastOreh() {
       /*
       //test
        var lastNode =
            document.getElementById("listOreh");
        if (orehArray.length > 0) {
    
            lastNode.removeChild(lastNode.lastChild);
            totalOreh = totalOreh - orehArray.pop();
            document.getElementById("totalOreh").innerHTML = totalOreh / 1000;
        }
        */
    }
    
function clearSaved() {
        /*
        saveData = 0;
        document.getElementById("savedDataLbl").innerHTML = (saveData / 1000);
        */
    }

    
function saveOrehBad() {
    /*
    saveData = totalOreh + saveData;
    document.getElementById("orehGalil").value =
        (Number(document.getElementById("orehGalil").value) - (totalOreh / 1000)).toFixed(2);
    document.getElementById("savedDataLbl").innerHTML = (saveData / 1000);

    var loadFromLocal = [];
    loadFromLocal = JSON.parse(localStorage.getItem("selectedBad"));
    if (loadFromLocal == null) {

        var intialData = {
            name: "none",
            width: 0,
            length: 0
        }

    }
    else {
        loadFromLocal.length = Number(loadFromLocal.length) - (saveData / 1000).toFixed(2);
        localStorage.setItem("selectedBad", JSON.stringify(loadFromLocal));

        var badArr = [];
        badArr = JSON.parse(localStorage.getItem("badListObj"));

        if (badArr == null) {

        }
        else {
            for (var i = 0; i < badArr.length; i++) {

                if (loadFromLocal.name === badArr[i].name) {
                    alert("Save in local");
                    badArr[i].length = Number(badArr[i].length) - (saveData / 1000).toFixed(2);
                    localStorage.setItem("badListObj", JSON.stringify(badArr));
                }
            }
        }
    }
*/
}
    
   
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

        <button id="deleteLast" onClick={deleteLastOreh}> Delete Last</button>
        <button id="clearSaved" onclick={clearSaved}> Clear Saved </button>


        <button id="saveOreh" onClick={saveOrehBad}>Save
</button>

        <button id="restBtn" onclick="restTotalOreh()">Delete All
</button>


    </div>
</div>


        
)

};

export default orehSec;