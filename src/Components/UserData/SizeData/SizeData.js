import React from 'react';

const sizeData = () => {

   
return (
    <table id="sizeTable">
        <tr>
            <th>Length</th>
            <th>Width</th>
            <th>
                <div class="sher">
                    pice:
          <input type="checkbox" id="exitSheerit" />
                </div>
            </th>
        </tr>

        <tr>
            <td>
                <input type="number" id="orehMidaInput" list="orehList" />
            </td>

            <datalist id="orehList">
                <option value="2000" />
                <option value="2250" />
                <option value="2500" />
                <option value="2750" />
                <option value="3000" />
                <option value="3250" />
                <option value="3500" />
                <option value="3750" />
                <option value="4250" />
            </datalist>

            <td>
                <input type="number" id="rohabMida" list="rohabList" />
            </td>
            <td>


                <input type="number" id="mySherit" list="sheeritList" />
                <datalist id="rohabList">
                    <option value="2870" />
                    <option value="3370" />
                    <option value="3870" />
                    <option value="4070" />
                    <option value="4370" />
                    <option value="4870" />
                    <option value="5370" />
                    <option value="6870" />
                </datalist>
            </td>
        </tr>

        <tr>
            <td colspan="3">
                <div id="opthionDiv">
                    <label> GZIRA:</label>

                    <select>
                        <option> one side </option>
                        <option> simtri big</option>
                        <option> simtri litli </option>
                        <option> equal </option>
                    </select>

                    <label> REPET: </label>
                    <input type="number" id="repet" value="1" />
                </div>
            </td>
        </tr>


    </table>


        
)

};

export default sizeData;