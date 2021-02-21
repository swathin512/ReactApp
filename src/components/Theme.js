import React ,{useState} from "react";
import './Theme.css';
import Disp from "./Disp.js";
import Disp1 from "./Disp1.js";


function Theme() {
const [theme, setTheme] =useState('green')

function Disp (){
  console.log('Disp Activated');
}


    return (
<header className={`${theme}`}>
  <title>Document</title>
 
  <div className={`${theme}`}>
    <div id="c1">
    </div>
  </div>
  <div className="relative">
    <button type="submit" className="navitem" id="b1" onClick={()=>setTheme('red')}>Click to red theme</button>
    <button type="submit" id="b2" onClick={Disp1}>Click to green theme</button>
    
  </div>
</header>
    );
}

export default Theme;