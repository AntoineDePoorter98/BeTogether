import "./Login.css";
let logo = require("../../img/logo.png");

const Login = () => {
  return (
    <div className="flex">
      <div className="left-div">
        <img src={logo} alt="becode logo" className="logo" />
      </div>
      <div className="right-div">
        <div>
          <h1>BeTogether</h1>
        </div>
        <div>
          <p>Sign In</p>
        </div>
        <div>
          <div>
            <input placeholder="@ email adress"></input>
          </div>
          <div>
            <input placeholder="Password"></input>
          </div>
          <div className="horizontal">
            <p>Remember Me</p>
            <p>Forgot Password ?</p>
          </div>
          <div>
            <p>Sign In</p>
          </div>
        </div>
        <p>Don't have an account ? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
