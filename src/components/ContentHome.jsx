import "../styles/ContentHome.scss";
import homeIcon from "../resources/home.jpeg"
export function ContentHome(){



    return (
        <div className="flex-container-content">
            <div className="img-container"><img src={homeIcon}/></div>
            <div> rightSide yes</div>
            
        </div>
    );
}