import {Link, Route, Routes} from 'react-router-dom';
export function TskManagerNavbar() {
  return (
    <div className="navbar-containerU">
     

        <Link to="register">
        <button className="login-button">LOG IN</button>
        </Link>


        <button className="register-button">CREATE AN ACCOUNT</button>
    </div>
    
  );
}


function About(){

    return (
      <h1>Hello world</h1>
    );
}