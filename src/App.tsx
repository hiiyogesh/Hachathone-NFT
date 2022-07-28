import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start";
import NFT from "./NFT";

const App = ()=>{
 
    return(
      <Router>
         <Routes>
            <Route  path="/" element={ <Start />}/>
            <Route  path="/nft" element={ <NFT />}/>
             {/*   <Route  path="/nftDetails" element={ <NFTDetails />} /> */}
         </Routes>
      </Router>
    );
};

export default App;