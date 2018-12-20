
import React from 'react';
import ClientInfo from './SizeData/ClientInfo';
import MetrialProp from './SizeData/MetrialProp';
import SizeData from './SizeData/SizeData';
import TfiraData from './SizeData/TfiraData';
import VolanSharvul from './SizeData/VolanSharvul';


const userData = () => {
    
return (
<div id="userData">
    <ClientInfo/>     
    <TfiraData/>
    <MetrialProp/>
    <SizeData/>
    <VolanSharvul/>
</div>

)

};

export default userData