import React from 'react';

const menuToData = () => {

    function showOrderRecord() {

        document.getElementById("exitOpthionData").style.display = "block";
    
    
        var p = document.getElementById("orderData");
        var htmlEnter = document.getElementById("orderSavedData");
    
        p.style.display = "block";
    
    
    
        htmlEnter.style.display = "block";
        htmlEnter.style.width = "100%";
        htmlEnter.style.height = "70%";
    
    
        var orderRecordArr = [];
        orderRecordArr = JSON.parse(localStorage.getItem("orderRecordStorage"));
    
    
        htmlEnter.innerHTML = "";
        var title = ["#", "CLIENT", "ORDER", "DATE", "BAD", "TFIRA", "WIDTH", "LENGTH", "VOLAN", "SHARVUL"];
        var tb = document.createElement("table");
        var tr = document.createElement("tr");
    
        for (var i = 0; i < title.length; i++) {
            var th = document.createElement("th");
            var tn = document.createTextNode(title[i]);
            th.appendChild(tn);
            tr.appendChild(th);
            tb.appendChild(tr);
        }
    
        htmlEnter.appendChild(tb);
    
    
        if (orderRecordArr == null) {
    
    
        }
        else {
    
            
               for (var i = 0; i < orderRecordArr.length; i++) {
                   var trEl = document.createElement("tr");
                   var thEl = document.createElement("td");
                   var tn1 = document.createTextNode(i);
                   var tn2 = document.createTextNode(orderRecordArr[i].clientName);
                   
               } 
    
            for (i = 0; i < orderRecordArr.length; i++) {
    
    
                var trEl = document.createElement("tr");
    
                var thEl = document.createElement("td");
                var tn1 = document.createTextNode(i);
                thEl.appendChild(tn1);
                trEl.appendChild(thEl);
    
                var thE2 = document.createElement("td");
                var tn2 = document.createTextNode(orderRecordArr[i].clientName);
                thE2.appendChild(tn2);
                trEl.appendChild(thE2);
    
    
                var thE3 = document.createElement("td");
                var tn3 = document.createTextNode(orderRecordArr[i].orderNum);
                thE3.appendChild(tn3);
                trEl.appendChild(thE3);
    
    
                var thE4 = document.createElement("td");
                var tn4 = document.createTextNode(orderRecordArr[i].orderDate);
                thE4.appendChild(tn4);
                trEl.appendChild(thE4);
    
    
                var thE5 = document.createElement("td");
                var tn5 = document.createTextNode(orderRecordArr[i].orderBadName);
                thE5.appendChild(tn5);
                trEl.appendChild(thE5);
    
    
                var thE6 = document.createElement("td");
                var tn6 = document.createTextNode(orderRecordArr[i].orderBadType);
                thE6.appendChild(tn6);
                trEl.appendChild(thE6);
    
    
                var thE7 = document.createElement("td");
                var tn7 = document.createTextNode(orderRecordArr[i].orderWidth);
                thE7.appendChild(tn7);
                trEl.appendChild(thE7);
    
    
                var thE8 = document.createElement("td");
                var tn8 = document.createTextNode(orderRecordArr[i].orderLength);
                thE8.appendChild(tn8);
                trEl.appendChild(thE8);
    
    
                var thE9 = document.createElement("td");
                var tn9 = document.createTextNode(orderRecordArr[i].orderVolan);
                thE9.appendChild(tn9);
                trEl.appendChild(thE9);
    
    
                var thE10 = document.createElement("td");
                var tn10 = document.createTextNode(orderRecordArr[i].orderSharvul);
                thE10.appendChild(tn10);
                trEl.appendChild(thE10);
    
                tb.appendChild(trEl);
    
            }
    
    
            htmlEnter.appendChild(tb);
    
        }
    }

return (

 
    <div id="opthionData">
    <button id="saveDataBtn" >SAVE</button>
    <button id="showSavedData" onClick={showOrderRecord}>SHOW</button>
    <button id="exitMenu" onClick={
        function () {
            document.getElementById("opthionData").style.display = "none";
        }
    }>X</button>
</div>

        
)

};

export default menuToData;