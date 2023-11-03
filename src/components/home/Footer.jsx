import { useEffect } from "react";
import githubIcon from "../../resources/icons/item1.png";
import { useState } from "react";







const gitPath = "https://github.com/Davidfz7/TskManager";
const developersReps = [
  "https://github.com/Davidfz7",
  "https://github.com/maria1409",
  "https://github.com/DaichiIkezawa"
 
];


export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="left-side-top">
          <strong>Developers</strong>
        </div>

        <Developers />
      </div>
      <div className="divisory-line"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-icons">
          <ul className="icons-footer-list">
            <li>
              <a href={gitPath} target="_blank">
                <img src={githubIcon} alt="github" />
              </a>
            </li>
          </ul>

          <p>&copy; 2023 TskManager's Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Developers() {

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:8080/api").
  //   then((response) => response.json()).
  //   then((data) => setData(data))

  // }, []);




  // console.log(useState);
  return (
    <div className="developers-div">
     {/* <ul>
      {data?.map((User) => ( 
          <li key={User.id}>{User.first_name}</li>

      ))}

     </ul> */}
      <ul className="developer-list">
        <li>
          <img src="https://avatars.githubusercontent.com/u/115898094?v=4" alt="Imagen de GitHub"/>
          

          <div className="developer-list-item">
            <strong>
            DaichiIkezawa <br />
              <span>
                <a href={developersReps[2]} target="_blank">
                  @DaichiIkezawa/github
                </a>
              </span>
            </strong>
            <ButtonFollow />
          </div>
        </li>
        <li>
        <img src="https://avatars.githubusercontent.com/u/44465062?v=4" alt="Imagen de GitHub"/>

          <div className="developer-list-item">
            <strong>
              maria1409 <br />
              <span>
                <a href={developersReps[1]} target="_blank">
                  @maria1409/github
                </a>
              </span>
            </strong>
            <ButtonFollow />
          </div>
        </li>

        <li>
        <img src="https://github.com/identicons/mwhite.png" alt="Imagen de GitHub"/>
        

          <div className="developer-list-item">
            <strong>
              Davidfz7 <br />
              <span>
                <a href={developersReps[0]} target="_blank">
                  @davidfz7/github
                </a>
              </span>
            </strong>

            <ButtonFollow />
          </div>
        </li>
      </ul>
    </div>
  );
}


function ButtonFollow() {
  let text = "Follow";
  let [Following, setFollowing] = useState(false);

  const status = () => {
    setFollowing(!Following);
  };

  if (Following) {
    text = "Following";
  } else {
    text = "Follow";
  }
  return (
    <a>
      <button onClick={status}>
        <strong>{text}</strong>
      </button>
    </a>
  );
}
