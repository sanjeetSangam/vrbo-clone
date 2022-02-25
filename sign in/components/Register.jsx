import { useState } from "react"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
export const Register = ()=>{
    const[email,setEmail] = useState();
    const[first_name,setFirstName] = useState();
    const[last_name,setLastName] = useState();
    const[pass,setPass] = useState();
    const navigate = useNavigate();
    function registerUser(){
        let data = {
            "email":email,
            "first_name":first_name,
            "last_name":last_name,
            "password":pass
        }
        
        // console.log(data)
        if(email !== "" && first_name !== "" && last_name !== "" && pass !== ""){
          axios.post("https://still-badlands-85906.herokuapp.com/users",data)
            navigate("/login");
        }
    }
    return(
        <>
         <div className="Nav">
            <div>
                <img src="https://www.pinclipart.com/picdir/big/102-1028215_png-file-back-button-icon-png-clipart.png"
                id="back-image" alt=""
                onClick={()=>navigate("/")}/>
            </div>
            <div onClick={()=>navigate("/")}><img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            id="icon-image" alt=""/></div>
           { /* Empty div for CSS flex*/}
            <div></div>
        </div>
        <div className="Register-box">
       <h2>Create an account</h2>
       <input type="text" placeholder="Email address"
       className="Input-boxes-R"
       onChange={(e)=>{setEmail(e.target.value)}} />
       
       <input type="text" placeholder="First name"
         className="Input-boxes-R"
         onChange={(e)=>{setFirstName(e.target.value)}}/>
       
       <input type="text" placeholder="Last name"
         className="Input-boxes-R"
         onChange={(e)=>{setLastName(e.target.value)}}/>
       
       <input type="password" placeholder="Password"
         className="Input-boxes-R"
         onChange={(e)=>{setPass(e.target.value);console.log(pass)}}/>
       
       <p>By creating an account, I agree to the Vrbo Terms and Conditions 
           and Privacy Statement.
       </p>

        <button id="Continue-button"
        onClick={registerUser}>Continue</button>

        <p>Already have an account? 
         <Link to="/login">Sign in</Link> </p>
        <p>or continue with</p>
           
            <div className="Continue-with">
              <img src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
              <img src="https://a.travel-assets.com/egds/marks/facebook.svg" alt="" />
              <img src="https://a.travel-assets.com/egds/marks/google.svg" alt="" />
            </div>
            <hr />
        </div>
        </>
    )
}