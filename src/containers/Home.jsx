import "../styles/Home.scss";
import {Footer} from "../components/home/Footer.jsx"
import { TskManagerNavbar } from "../components/home/TskManagerNavbar.jsx";
import {ContentHome} from "../components/home/ContentHome.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";





export function Home() {
  return (
    <div className="home-container">
      <div className="header-div-home"> 
        <TskManagerNavbar/>
      </div>
      <div className="content-div-home"> 
        <ContentHome/>
      </div>

      <div className="footer-div-home">
        <Footer />
      </div>
    </div>
  );
}
