import React from 'react';
import LoadContextProvider from './Context/LoadContext';
import AuthContextProvider from './Context/AuthContext';
import Refresh from './Refresh'
import Web3 from 'web3'
import transferabi from './abi/Transfers.json'

export let web3 = new Web3(Web3.givenProvider||"http://localhost:7545")
window.ethereum.enable()
export let transfer = new web3.eth.Contract(transferabi.abi,"0x8721DfDfF9068Afcc988b404B080dfC85d5D0958")

const App = () => {

    return (
        <LoadContextProvider> 
            <AuthContextProvider>  
                <Refresh/>
         </AuthContextProvider>
         </LoadContextProvider>

       
    );
}
 
export default App;
    
