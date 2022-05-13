import "./Login.css";
import { Link } from "react-router-dom";

let logo = require("../../img/logo.png");

const Login = () => {
  return (
    <div className="flex">
      <div className="left-div">
        <img src={logo} alt="becode logo" className="logo" />
      </div>
      <div className="right-div">
        <div className="title">
          <h1>BeTogether</h1>
        </div>
        <div className="signin">
          <p>Sign In</p>
        </div>
        <form action=" /users/login" method="post">
          <div>
            <div>
              <input name="" placeholder="@ email adress"></input>
            </div>
            <div>
              <input name="" type="password" placeholder="Password"></input>
            </div>

            <div className="horizontal">
              <div>
                <p className="">Forgot Password ?</p>
              </div>
            </div>
            <button className="login">Sign In</button>
          </div>
        </form>
        <div className="signup">
          <Link to="/signup">Don't have an account ? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
