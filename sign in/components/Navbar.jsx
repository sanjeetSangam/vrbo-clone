import { useState } from "react"

export const Navbar = ()=>{
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
    return(
      <>
        <div className="Nav">
            <div>
                <img src="https://www.pinclipart.com/picdir/big/102-1028215_png-file-back-button-icon-png-clipart.png"
                id="back-image"/>
            </div>
            <div><img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            id="icon-image"/></div>
            
            <div></div>
        </div>
        <div className="Sign-in-box">
            <h2>Sign in</h2>
            <input type="text" placeholder="Email address" className="Input-boxes" 
            onChange={(e)=>{
              setEmail(e.target.value)
              console.log(email)
            }}/>
            <input type="password" placeholder="Password" className="Input-boxes"
            onChange={(e)=>{
              setPass(e.target.value);
              console.log(pass)
            }}/>
           <div>
           <input type="radio" value="true" id="radio-sign"/>
            <label for="radio-sign"> Keep me signed in</label>
           </div>
            <p>By signing in, I agree to the Vrbo Terms and Contitions and Privacy Statement 
                   </p>
            <button id="Sign-in-button">Sign in</button>
            <p>Forgot password ?</p>
            <p>Don't have an account? Create one</p>
            
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