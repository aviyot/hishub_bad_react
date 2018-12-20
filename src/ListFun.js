
/*

function mainFun() {

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

function selectChoice() {

    var choiceTfira = document.getElementById("tfiraOption").value;

    switch (choiceTfira) {

        case "plata":
            Number(document.getElementById("kant").value = 0)
            Number(document.getElementById("hebel").value = 0);
            break;

        case "plataWithKant":
            Number(document.getElementById("kant").value = 70);
            Number(document.getElementById("hebel").value = 50);
            break;

        case "awings":
            Number(document.getElementById("kant").value = 70);
            Number(document.getElementById("hebel").value = 50);
            break;

        case "awingsWithVolan":
            Number(document.getElementById("kant").value = 70);
            Number(document.getElementById("hebel").value = 50);
            break;

        case "nofelet":
            Number(document.getElementById("kant").value = 70);
            Number(document.getElementById("hebel").value = 50);
            break;

        case "nofeletWithVolan":
            Number(document.getElementById("kant").value = 70);
            Number(document.getElementById("hebel").value = 50);
            break;
        default:
    }

}

function sherit() {

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

        document.getElementById("hashebSheeritBtn").addEventListener("click", drawRealSizeSampleOneSide);
    }//end of "if"

    else
        alert("Enter width");


}//End of sheerit

function orehFun() {

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

function restTotalOreh() {
    totalOreh = 0;
    var r = document.getElementById("listOreh");
    while (orehArray.length > 0) {
        orehArray.pop();
        r.removeChild(r.lastChild);
    }

    document.getElementById("totalOreh").innerHTML = (totalOreh / 1000) + "M";
}

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

function saveOrehBad() {
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

}

function deleteLastOreh() {

    var lastNode =
        document.getElementById("listOreh");
    if (orehArray.length > 0) {

        lastNode.removeChild(lastNode.lastChild);
        totalOreh = totalOreh - orehArray.pop();
        document.getElementById("totalOreh").innerHTML = totalOreh / 1000;
    }
}

function clearSaved() {
    saveData = 0;
    document.getElementById("savedDataLbl").innerHTML = (saveData / 1000);
}

function drawRealSize(event) {

    deleteNodes();

    var mainDiv = document.getElementById("mainDiv");
    var sizePice;
    var opthioGzira = event.currentTarget.id;

    if (opthioGzira === "tr1" || opthioGzira === "tr3" || opthioGzira === "tr4") {
        sizePice = shelem + 1;
        if (mySherit > 0)
            sizePice = shelem + 2;

    }
    if (opthioGzira === "tr2") {
        sizePice = shelem + 2;
    }

    var w = 100 / sizePice;

    for (var i = 0; i < sizePice; i++) {
        var nodeChild = document.createElement("div");
        nodeChild.style.border = "thin solid yellow";
        nodeChild.style.height = "100%";

        if (i === 0 || i === (sizePice - 1)) {


            if (opthioGzira === "tr1") {
                if (i === 0) {
                    if (mySherit > 0)
                        nodeChild.style.width = w * (mySherit / rohabBad) + "%";
                    else
                        nodeChild.style.width = w + "%";
                }
                if (i === sizePice - 1)
                    nodeChild.style.width = w * (sher / rohabBad) + "%";
            }
            if (opthioGzira === "tr2")
                nodeChild.style.width = w * (sherLitleSimtri / rohabBad) + "%";
        }
        if (opthioGzira === "tr3")
            nodeChild.style.width = w * (sherBigSimtri / rohabBad) + "%";
        if (opthioGzira === "tr4")
            nodeChild.style.width = w * (sherEqulAll / rohabBad) + "%";

        if (i > 0 && i < sizePice - 1) {
            if (opthioGzira === "tr4")
                nodeChild.style.width = w * (sherEqulAll / rohabBad) + "%";
            else
                nodeChild.style.width = w + "%";
        }
        nodeChild.style.backgroundColor = "brown";
        mainDiv.appendChild(nodeChild);
        mainDiv.style.backgroundColor = "black";

        if (opthioGzira === "tr1" && mySherit === 0)
            mainDiv.style.justifyContent = "start";
        else
            mainDiv.style.justifyContent = "center";

    } // end for

}//end of drawRealSize()

function drawRealSizeSample(e) {


    deleteNodes();

    var mainDiv = document.getElementById("mainDiv");
    var opthioGzira = e.currentTarget.id;


    var w = 100 / 3;

    for (var i = 0; i < 3; i++) {
        var nodeChild = document.createElement("div");
        nodeChild.style.border = "thin solid yellow";
        nodeChild.style.height = "100%";

        if (i === 0) {

            if (opthioGzira === "op1Btn")
                nodeChild.style.width = w + "%";

            if (opthioGzira === "op2Btn")
                nodeChild.style.width = w * (sherLitleSimtri / rohabBad) + "%";

            if (opthioGzira === "op3Btn")
                nodeChild.style.width = w * (sherBigSimtri / rohabBad) + "%";

            if (opthioGzira === "op4Btn")
                nodeChild.style.width = w * (sherEqulAll / rohabBad) + "%";
        }

        if (i === 1) {
            if (opthioGzira === "op4Btn")
                nodeChild.style.width = w * (sherEqulAll / rohabBad) + "%";
            else
                nodeChild.style.width = w + "%";
        }

        if (i === 2) {

            if (opthioGzira === "op1Btn")
                nodeChild.style.width = w * (sher / rohabBad) + "%";


            if (opthioGzira === "op2Btn")
                nodeChild.style.width = w * (sherLitleSimtri / rohabBad) + "%";

            if (opthioGzira === "op3Btn")
                nodeChild.style.width = w * (sherBigSimtri / rohabBad) + "%";

            if (opthioGzira === "op4Btn")
                nodeChild.style.width = w * (sherEqulAll / rohabBad) + "%";
        }

        nodeChild.style.backgroundColor = "brown";
        mainDiv.appendChild(nodeChild);
        mainDiv.style.backgroundColor = "black";

        if (opthioGzira === "op1Btn")
            mainDiv.style.justifyContent = "start";
        else
            mainDiv.style.justifyContent = "center";

    } // end for

}//end of drawRealSize()

function drawRealSizeSampleOneSide(event) {

    deleteNodes();

    var mainDiv = document.getElementById("mainDiv");
    var w = 100 / (shelem + 1);

    for (var i = 0; i < shelem + 1; i++) {
        var nodeChild = document.createElement("div");
        nodeChild.style.border = "thin solid yellow";
        nodeChild.style.height = "100%";

        if (i < shelem)
            nodeChild.style.width = w + "%";

        if (i === shelem)
            nodeChild.style.width = w * (sher / rohabBad) + "%";

        nodeChild.style.backgroundColor = "brown";
        mainDiv.appendChild(nodeChild);
        mainDiv.style.backgroundColor = "black";
        mainDiv.style.justifyContent = "start";

    } // end for


}//end of drawRealSizeSample()

function deleteNodes() {

    var nodeToDelete = document.getElementById("mainDiv");
    while (nodeToDelete.hasChildNodes()) {
        nodeToDelete.removeChild(nodeToDelete.firstChild);
    }

}

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

function selectBad() {
    document.getElementById("badName").textContent = document.getElementById("enterNameBad").value;
    document.getElementById("rohabBad").value = document.getElementById("enterWidthBad").value;
    document.getElementById("orehGalil").value = document.getElementById("enterOrehBad").value;

    saveLastBad();
    document.getElementById("badSec").style.display = "none";
}

function getLastSelectedBad() {

    if (window.localStorage == null) {

    }
    else {

        var loadFromLocal = JSON.parse(localStorage.getItem("selectedBad"));
        if (loadFromLocal == null) {
        }
        else {
            document.getElementById("badName").textContent = loadFromLocal.name;
            document.getElementById("rohabBad").value = loadFromLocal.width;
            document.getElementById("orehGalil").value = loadFromLocal.length;
        }
    }
}

function saveLastBad() {

    var n = document.getElementById("badName").textContent;
    var w = document.getElementById("rohabBad").value;
    var l = document.getElementById("orehGalil").value;

    var savedData = { name: n, width: w, length: l };
    localStorage.setItem("selectedBad", JSON.stringify(savedData));
}

function enterBadRecord() {

    var badArray = [];
    badArray = JSON.parse(localStorage.getItem("badListObj"));

    var badObject = {
        "name": document.getElementById("enterNameBad").value,
        "width": document.getElementById("enterWidthBad").value,
        "length": document.getElementById("enterOrehBad").value
    };


    if (badArray == null) {

        var badA = [];
        badA.push(badObject);
        localStorage.setItem("badListObj", JSON.stringify(badA));
        alert("bad list created");

    }
    else {

        var iHave = true;
        for (var i = 0; i < badArray.length; i++) {
            if (badArray[i].name === document.getElementById("enterNameBad").value) {
                iHave = false;
                badArray[i].width = document.getElementById("enterWidthBad").value;
                badArray[i].length = document.getElementById("enterOrehBad").value;
                localStorage.setItem("badListObj", JSON.stringify(badArray));
                alert("Item Updated");
            }
        }


        if (iHave) {
            badArray.push(badObject);
            localStorage.setItem("badListObj", JSON.stringify(badArray));
            alert("New Item added secsfully");

        }

    }

    showBadRecord();
}

function deleteBadItem() {

    var loadFromLocal = JSON.parse(localStorage.getItem("badListObj"));

    if (loadFromLocal == null) {

    }

    else {

        for (var i = 0; i < loadFromLocal.length; i++) {
            if (loadFromLocal[i].name === document.getElementById("enterNameBad").value) {
                if (window.confirm(" Delete " + document.getElementById("enterNameBad").value + " ?")) {
                    loadFromLocal.splice(i, 1);
                    localStorage.setItem("badListObj", JSON.stringify(loadFromLocal));
                }
            }
        }
    }

    showBadRecord();
}



function sortDataFun(pr, data) {
    var localData = JSON.parse(localStorage.getItem(data));
    if (localData == null) {
    }
    else {

        localData.sort(function (a, b) {

            var x = a.pr.toLowerCase();
            var y = b.pr.toLowerCase();

            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;

        });

        localStorage.setItem(data, JSON.stringify(localData));
    }
}

function sortData(sOp) {

    if (window.localStorage == null) {

    }


    else {

        var localData = JSON.parse(localStorage.getItem("badListObj"));
        if (localData == null) { }
        else {
            localData.sort(function (a, b) {

                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });


            localStorage.setItem("badListObj", JSON.stringify(localData));
        }
    }
}

sortData();




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

function addClient() {
    var clientArray = [];
    clientArray = JSON.parse(localStorage.getItem("ClientListLocalData"));
    var clientObject = {
        clientName: document.getElementById("enterclientName").value,
        clientTel: document.getElementById("enterTel").value,
        clientAdress: document.getElementById("enterStreet").value

    };


    if (clientArray == null) {
        var clA = [];
        clA.push(clientObject);
        localStorage.setItem("ClientListLocalData", JSON.stringify(clA));
        alert("Client Data created");

    }
    else {

        var iHave = true;

        for (var i = 0; i < clientArray.length; i++) {

            if (clientArray[i].clientName === document.getElementById("enterclientName").value) {
                iHave = false;
                clientArray[i].clientTel = document.getElementById("enterTel").value;
                clientArray[i].clientAdress = document.getElementById("enterStreet").value;
                localStorage.setItem("ClientListLocalData", JSON.stringify(clientArray));
                alert("Item Updated");
            }
        }


        if (iHave) {
            clientArray.push(clientObject);
            localStorage.setItem("ClientListLocalData", JSON.stringify(clientArray));
            alert("New Item added secsfully");
            showClientRecord();
        }

    }
}

function deleteClient() {

    var loadFromLocal = JSON.parse(localStorage.getItem("ClientListLocalData"));
    if (loadFromLocal == null) {
        //alert("key null");
    }
    else {

        for (var i = 0; i < loadFromLocal.length; i++) {
            if (loadFromLocal[i].clientName === document.getElementById("enterclientName").value) {

                if (window.confirm(" Delete DATA ?")) {
                    loadFromLocal.splice(i, 1);
                    localStorage.setItem("ClientListLocalData", JSON.stringify(loadFromLocal));
                    showClientRecord();
                }

            }

        }
    }

}

function selectClient() {

    document.getElementById("clientNameLablel").textContent = document.getElementById("enterclientName").value;
    document.getElementById("clientSec").style.display = "none";
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

function saveOrderData() {

    if (window.confirm(" SAVE DATA ?")) {


        var orderData = {
            clientName: document.getElementById("clientNameLablel").textContent,
            orderNum: document.getElementById("orderNumber").value,
            orderDate: document.getElementById("orderDate").value,
            orderBadName: document.getElementById("badName").textContent,
            orderBadType: document.getElementById("tfiraOption").value,
            orderWidth: document.getElementById("rohabMida").value,
            orderLength: document.getElementById("orehMidaInput").value,
            orderVolan: document.getElementById("volan").value,
            orderSharvul: document.getElementById("sharvul").value
        };

        var orderRecordArr = [];

        orderRecordArr = JSON.parse(localStorage.getItem("orderRecordStorage"));


        if (orderRecordArr == null) {

            var fristOrderData = [];
            fristOrderData.push(orderData);
            localStorage.setItem("orderRecordStorage", JSON.stringify(fristOrderData));

        }

        else {

            orderRecordArr.push(orderData);
            localStorage.setItem("orderRecordStorage", JSON.stringify(orderRecordArr));
        }

    }
}

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

        /*    
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

function deleteLastOrder() {

    var orderRecordArr = [];
    orderRecordArr = JSON.parse(localStorage.getItem("orderRecordStorage"));
    if (orderRecordArr == null) {
        //alert("key null");
    }
    else {
        orderRecordArr.pop();

        localStorage.setItem("orderRecordStorage", JSON.stringify(orderRecordArr));
    }

    showOrderRecord();

}

function loadPices() {

    //הפונקציה מכניסה את השאריות השמורות לתוך החישוב
    //code
    var listObLocal = [];
    listObLocal.push(JSON.parse(localStorage.getItem("PICES")));

    if (JSON.parse(localStorage.getItem("PICES")) == null) {
        // alert("Empty Pices");

        var intialListOb = {
            bad: "R123",
            sherit: [{ w: 400, l: 3250 },
            { w: 600, l: 2750 }]
        }
        localStorage.setItem("PICES", JSON.stringify(intialListOb));

    }
    else {


        var sheeritL = document.getElementById("sheeritList");
        sheeritL.innerHTML = "";
        for (var i = 0; i < listObLocal.length; i++) {
            for (var j = 0; j < listObLocal[i].sherit.length; j++) {
                var op = document.createElement("option");
                op.value = listObLocal[i].sherit[j].w;
                sheeritL.appendChild(op);
            }
        }
    }
}


}

*/
