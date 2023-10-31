import "../styles/Home.scss";
import { Footer } from "../components/Footer.jsx";
import {ContentHome} from "../components/ContentHome.jsx"
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/css/bootstrap.min.css";

//My get for my api
//Promesa que en otras promesas son simular un js de multithread


// fetch("http://localhost:8080/api").
// then((response) => response.json()).
// then((data) => console.log(data));


export function Home() {
  return (
    <div className="home-container">
      <div className="header-div-home"> header </div>
      <div className="content-div-home"> 
        <ContentHome/>
      </div>

      <div className="footer-div-home">
        <Footer />
      </div>
    </div>
  );
}
