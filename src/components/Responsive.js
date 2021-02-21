import React from "react";
import './Responsive.css';

function Responsive() {
  return (
<header className="responsive">
      <div className ="container"></div>

    <div className="row">
     
     
  <div className="col-3 col-s-3 menu">
    <ul>
      <li className="l1">Header</li>
      <li className="l2">Hero</li>
      <li className="l3">Content</li>
      <li className="l4">Side Bar</li>
      <li className="l5">Footer</li>
    </ul>
  </div>

  <div className="col-3 col-s-3 menu1">
    <ul>
      <li className="l6">Header</li>
      <li className="l7">Hero</li>
      <li className="l8">Content</li>
      <li className="l9">Side Bar</li>
      <li className="l10">Footer</li>
    </ul>
  </div>

     
    </div>
    </header>
  );
}

export default Responsive;
