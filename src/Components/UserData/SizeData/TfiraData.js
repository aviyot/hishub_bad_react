import React from 'react';

const tfiraData = () => {

   
return (

    <table id="tfiraTable">
    <tr>
        <th>Kant</th>
        <th>Hibur</th>
        <th>Hebel</th>
    </tr>
    <tr>
        <td>

            <datalist id="kantList">
                <option value="0" />
                <option value="50" />
                <option value="70" />
            </datalist>

            <input type="number" id="kant" value="70" list="kantList" />
        </td>
        <td>
            <input type="number" id="hibur" value="25" />
        </td>
        <td>
            <datalist id="hebelList">
                <option value="0" />
                <option value="30" />
                <option value="50" />
            </datalist>
            <input type="number" id="hebel" value="50" list="hebelList" />
        </td>
    </tr>
    <th>
        TFIRA:
</th>
    <td colspan="2">
        <select id="tfiraOption" autofocus="autofocus" onchange="selectChoice()">
            <option value="plata">PLATA</option>
            <option value="plataWithKant">PLATA WITH KANT</option>
            <option value="awings" selected="selected">AWINGS</option>
            <option value="awingsWithVolan">AWINGS WITH VOLAN</option>
            <option value="nofelet">NOFELET</option>
            <option value="nofeletWithVolan">NOFELET With Volan</option>
        </select>
    </td>
    <tr>
    </tr>
</table>

)

};

export default tfiraData;