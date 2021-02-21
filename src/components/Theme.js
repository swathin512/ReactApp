import React ,{useState} from "react";
import './Theme.css';
import Disp from "./Disp.js";
import Disp1 from "./Disp1.js";


function Theme() {
const [theme, setTheme] =useState('green')





    return (
<header className={`${theme}`}>
  <title>Document</title>
 
  <div className={`${theme}`}>
    <div className="flex-container">
    <div id="c1">
      </div>
    </div>
  </div>
  <div className="relative">
    <button type="submit" className="navitem" id="b1" onClick={()=>setTheme('red')}>Red theme</button>
    
    
  </div>
</header>
    );
}

export default Theme;
