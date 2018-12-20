import React from 'react';

const metrialProp = () => {

   

    function showBadRecord() {

        document.getElementById("badSec").style.display = "block";
        
        if (window.localStorage == null) {
    
        }
    
        else {
    
            var badListData = JSON.parse(localStorage.getItem("badListObj"));
            var badList = document.getElementById("badListTable");
            badList.innerHTML = '<tr><th>#</th><th>Name</th><th>Width</><th>oreh</th></tr>';
    
            if (badListData == null) {
    
            }
            else {
    
                for (var i = 0; i < (badListData.length); i++) {
                  
                    /*
                    <tr>
                        <td>{i+1}</td>
                        <td>{badListData[i].name}</td>
                        <td>{badListData[i].width}</td>
                        <td>{badListData[i].length}</td>

                    </tr>
                    */
                    
                    var trNode = document.createElement("tr");
                    var td0 = document.createElement("td");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    td0.textContent = i + 1;
                    td1.textContent = badListData[i].name;
                    td2.textContent = badListData[i].width;
                    td3.textContent = badListData[i].length;
    
                    trNode.appendChild(td0);
                    trNode.appendChild(td1);
                    trNode.appendChild(td2);
                    trNode.appendChild(td3);
                    badList.appendChild(trNode);
                    
                }
            }
    
    
            var trBadList = document.getElementById("badListTable").querySelectorAll("tr");
    
            for (i = 1; i < trBadList.length; i++) {
                trBadList[i].addEventListener("click", showSelectedBad);
            }
        }
    
    
    }
    
    function showSelectedBad(ev) {
        var tdCh = ev.currentTarget;
        var badName = tdCh.childNodes[1].textContent;
        var badWidth = tdCh.childNodes[2].textContent;
        var badLength = tdCh.childNodes[3].textContent;
        document.getElementById("enterNameBad").value = badName;
        document.getElementById("enterWidthBad").value = badWidth;
        document.getElementById("enterOrehBad").value = badLength;
    }
    
return (

    <table id="galilTable">
    <tr>
        <th>Bad Name</th>
        <th>Width</th>
        <th>Size(M)</th>
    </tr>
    <tr>
        <td id="badName" onClick ={showBadRecord}> </td>
        <td>


            <datalist id="widthList">
                <option value="1200" />
                <option value="1205" />
                <option value="1500" />
            </datalist>

            <input type="number" id="rohabBad" value="" placeholder="width" list="widthList" />
        </td>
        <td>

            <datalist id="orehGalilList">
                <option value="0" />
                <option value="50" />
                <option value="60" />
            </datalist>

            <input type="number" id="orehGalil" value="" list="orehGalilList" />
        </td>
    </tr>

</table>


)

};

export default metrialProp;