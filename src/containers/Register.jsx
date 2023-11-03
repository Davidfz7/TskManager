import "../styles/Register.scss";
import githubIcon from "../resources/icons/github.png";
import facebookIcon from "../resources/icons/facebook.png";
import gmailIcon from "../resources/icons/gmail.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useState } from "react";
export function Register() {
    const url = "http://localhost:8080/api/postbody"
    const [data, setData] = useState({
            first_name: "",
            last_name : "",
            birthday  : "",
            password  : ""


    })

    function handle(e){
            const newdata={...data}
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            first_name: data.first_name,
            last_name: data.last_name,
            birthday: data.birthday,
            password: data.password


        }).then(res =>{console.log(res.data)})

    }
    return (
        <div className="register-container">

            <div className="project-name">
                <h2>Tsk Manager</h2>
            </div>
            <div className="create-accountW">
                <h3>Create an account with</h3>
                <div className="imgs-register">
                    {/* These are supposed to be links */}
                    <img src={githubIcon} alt="github"></img>
                    <img src={facebookIcon} alt="facebook"></img>
                    <img src={gmailIcon} alt="gmail"></img>
                </div>
                <h3>Or</h3>
                
              
            </div>
            <div className="register-container">


            <Form  onSubmit={(e) => submit(e)} className="myForm" method="post" >

            <Form.Group className="basic-info" controlId="formBasicInfo">
                <Form.Control onChange={(e)=> handle(e)} id="first_name" value={data.first_name} type="text" placeholder="FIRST NAME" />
                <Form.Control onChange={(e)=> handle(e)} id="last_name" value={data.last_name} type="text" placeholder="LAST NAME" />
            </Form.Group>


            <Form.Group className="birth-info" controlId="formBasicBirthday">
                <Form.Control  onChange={(e)=> handle(e)} id="birthday" value={data.birthday} type="text" placeholder="DAY" />             
            </Form.Group>
                
                
          
            

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label-form">Password</Form.Label>
                <Form.Control onChange={(e)=> handle(e)} id="password" value={data.password} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="button-sumbit">
                Submit
            </Button>
            </Form>
            
            {/* <form >
                <input  placeholder="name"></input>
                <input   placeholder="lastname"></input>
                <input  placeholder="birthday"></input>
                <input  placeholder="password"></input>
                <button>Submit</button>
            </form> */}
        

            </div>
        </div>    
  )
}
  