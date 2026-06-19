import react from "react";
import "./App.css";
function App() {
  return (
<div className="box" >
      <h1>Student Registration Form</h1>
      <input type="text" placeholder="Enter your name" class="name"/><br />
      <input type="email" placeholder="Enter your email" class="email"/><br/>
      <input type="password" placeholder="Enter your Password" class="password" /><br />
      <input type="text" placeholder="Enter your course" class="course" /><br />
      <input type="number" placeholder="Enter your number" class="number" /><br />
      <button class="button">Register</button>
    </div>
    
  );
}
export default App;