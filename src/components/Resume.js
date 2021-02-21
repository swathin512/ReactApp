import React from "react";
import './Resume.css';

function Resume() {
  return (
   
      <header className="resume">
      <div className ="container">
      <header><h1>Resume</h1></header>
     

    <form id="f1">
        FirstName<input type="text" maxlength="128" placeholder="Enter your first name" ></input>
        <br></br>
        LastName <input type="text" maxlength="128" placeholder="Enter your last name"></input>
        <br></br>
        <div className="gender">
        Gender
  <input type="radio" value="Male" name="gender"></input> Male
        <input type="radio" value="Female" name="gender" /> Female
        </div>
        <br></br>
        <br></br>
        

        Masters Degree field <select name="cars" id="cars" multiple>
    <option value="computer Science">Computer Science</option>
    <option value="electrical">Electrical</option>
    <option value=" instrumentation"> Instrumentation</option>
    <option value="civii">Civil</option>
  </select>
  <br>
  </br>
  <br></br>
  Email Address<input type="email"></input>

  <br></br>
  <br></br>
  Attach a file <input type="file" multiple></input>
        <br>
        </br>
        <br>
        </br>
      
  Date of Graduation<input type="date"  max="2220-02-01"></input>

  <br></br>
  <br></br>
  <button type="submit">Submit</button>
  
    
 
      
         </form>
       
    

    </div>
         </header>
  );
}

export default Resume;
