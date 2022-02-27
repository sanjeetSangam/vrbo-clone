import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "react-spinner-material";


export const Register = () => {
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState(false);
  var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //name should only contain letters
  var nameValidate = /^[a-zA-Z]+$/;

  // pass : 6-20 char, one num, one uppercase, one lowercase
  var passValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const navigate = useNavigate();
  function registerUser() {
    setLoading(true);
    let data = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: pass,
    };

    // console.log(data)

    if (
      email.match(emailValidate) &&
      first_name !== "" &&
      last_name !== "" &&
      pass.match(passValidate)
    ) {
      axios.post("https://still-badlands-85906.herokuapp.com/users", data);
      navigate("/login");
    } else if (!email.match(emailValidate)) {
      alert("Please enter a valid email");
    } else if (!pass.match(passValidate)) {
      alert(
        "Password should contain 6-20 characters,one number, one lowercase and an uppercase character"
      );
    }
    setLoading(false);
  }
  return loading ? (
    <div className="loader">
      <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true}
      />
    </div>
  ) : (
    <>
      <div className="Nav">
        <div>
          <img
            src="https://www.pinclipart.com/picdir/big/102-1028215_png-file-back-button-icon-png-clipart.png"
            id="back-image"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <div onClick={() => navigate("/")}>
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            id="icon-image"
            alt=""
          />
        </div>
        {/* Empty div for CSS flex*/}
        <div></div>
      </div>
      <div className="Register-box">
        <h2>Create an account</h2>
        <input
          type="text"
          placeholder="Email address"
          className="Input-boxes-R"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="First name"
          className="Input-boxes-R"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Last name"
          className="Input-boxes-R"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="Input-boxes-R"
          onChange={(e) => {
            setPass(e.target.value);
            // console.log(pass);
          }}
        />

        <p>
          By creating an account, I agree to the Vrbo Terms and Conditions and
          Privacy Statement.
        </p>

        <button id="Continue-button" onClick={registerUser}>
          Continue
        </button>

        <p>
          Already have an account?
          <Link to="/login">Sign in</Link>{" "}
        </p>
        <p>or continue with</p>

        <div className="Continue-with">
          <img src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
          <img
            src="https://a.travel-assets.com/egds/marks/facebook.svg"
            alt=""
          />
          <img src="https://a.travel-assets.com/egds/marks/google.svg" alt="" />
        </div>
        <hr />
      </div>
    </>
  );
};
