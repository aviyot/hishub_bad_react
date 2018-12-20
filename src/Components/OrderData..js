import React from 'react';

const orderData = () => {

   
return (
    <div id="orderData">
    <button id="exitOpthionData" onClick={function () {
        document.getElementById("orderData").style.display = "none";
        document.getElementById("opthionData").style.display = "none";
    }}>X</button>
    <div id="orderSavedData"></div>
    <button id="deleteLastOrderBtn" > DELETE LAST</button>
</div>

        
)

};

export default orderData;