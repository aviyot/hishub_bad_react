import React from 'react';

const clientInfo = () => {

    
    
function showClientRecord() {
    document.getElementById("clientSec").style.display = "block";

    if (window.localStorage == null) {


    }
    else {
        var clientListData = JSON.parse(localStorage.getItem("ClientListLocalData"));

        if (clientListData == null) {

        }
        else {
            var clientList = document.getElementById("clientList");
            clientList.innerHTML = '<tr><th>#</th><th>Name</th><th>Tel</><th>Adress</th></tr>';

            for (var i = 0; i < (clientListData.length); i++) {

                var trNode = document.createElement("tr");
                var td0 = document.createElement("td");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");

                td0.textContent = i + 1;
                td1.textContent = clientListData[i].clientName;
                td2.textContent = clientListData[i].clientTel;
                td3.textContent = clientListData[i].clientAdress;

                trNode.appendChild(td0);
                trNode.appendChild(td1);
                trNode.appendChild(td2);
                trNode.appendChild(td3);
                clientList.appendChild(trNode);
            }

        }


        var trClientList = document.getElementById("clientList").querySelectorAll("tr");

        for (i = 1; i < trClientList.length; i++) {
            trClientList[i].addEventListener("click", showSelectedClient);
        }
    }

}

function showSelectedClient(ev) {

    var tdCh = ev.currentTarget;
    var td1 = tdCh.childNodes[1].textContent;
    var td2 = tdCh.childNodes[2].textContent;
    var td3 = tdCh.childNodes[3].textContent;
    document.getElementById("enterclientName").value = td1;
    document.getElementById("enterTel").value = td2;
    document.getElementById("enterStreet").value = td3;
}
   
return (
           
    <table id="client">
       
        <tr>
            <th>Client</th>
            <th>Date   </th>
            <th>Num order</th>
        </tr>
        <tbody>
        <tr>
            <td id="clientNameLablel"  onClick={showClientRecord} > </td>
            <td>
                <input type="date" id="orderDate" />
            </td>
            <td>
                <input type="number" id="orderNumber" />
            </td>
        </tr>
        </tbody>
    </table>

        
)

};

export default clientInfo;