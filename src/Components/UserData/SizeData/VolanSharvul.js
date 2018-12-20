import React from 'react';

const volanSharvul = () => {

   
return (
    <table id="volanSharvolTable">
        <tr>
            <th>volan</th>
            <th>sug-v</th>
            <th>sharvul</th>
        </tr>
        <tr>
            <td>

                <datalist id="volanList">
                    <option value="0" />
                    <option value="200" />
                    <option value="250" />
                    <option value="300" />
                </datalist>
                <input type="number" id="volan" value="0" list="volanList" />
            </td>
            <td>
                <select id="sugGali">
                    <option value="gali">GALI</option>
                    <option value="kipul" selected="selected">KIPUL</option>
                    <option value="seret"> SERET</option>
                </select>
            </td>
            <td>

                <datalist id="sharvulList">
                    <option value="0" />
                    <option value="50" />
                    <option value="70" />
                    <option value="100" />
                </datalist>

                <input type="number" id="sharvul" value="0" list="sharvulList" /> </td>
        </tr>
    </table>

        
)

};

export default volanSharvul;