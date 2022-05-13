import "./SignUp.css";
import { Link } from "react-router-dom";

let logo = require("../../img/logo.png");

const SignUp = () => {
  return (
    <div className="flex">
      <div className="left-div">
        <img src={logo} alt="becode logo" className="logo" />
      </div>
      <div className="right-div">
        <div className="title">
          <h1>BeTogether</h1>
        </div>
        <div className="create">
          <p>Create your account</p>
        </div>
        <form action="/users/signup" method="post">
          <div>
            <div>
              <input name="" placeholder="Username"></input>
            </div>
            <div>
              <input name="" placeholder="@ email adress"></input>
            </div>
            <div>
              <input name="" type="password" placeholder="Password"></input>
            </div>
            <div className="horizontal"></div>
            <button className="login">Register</button>
          </div>
        </form>
        <div className="signup">
          <Link to="/login">Allready have an account ? Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
