import homeIcon from "../../resources/home.jpeg"
export function ContentHome(){



    return (
        <div className="flex-container-content">
            <div className="img-container"><img src={homeIcon}/></div>
            <div className="info-container"> 
                <h1 className="my-contentH1"><strong>TskManager</strong></h1>
                <p  className="my-contentP"><strong>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable. eristic words etc.</strong></p>
                <h1  className="my-contentH1"><strong>OUR MISSION</strong></h1>
                <p className="my-contentP">
                <strong>
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable. eristic words etc.
                </strong>
                </p>
            </div>
            
        </div>
    );
}