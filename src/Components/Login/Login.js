import "./Login.css";
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
        <div>
          <div>
            <input placeholder="@ email adress"></input>
          </div>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="horizontal">
            <div>
              <p className="">Forgot Password ?</p>
            </div>
          </div>
          <div className="login">
            <p>Sign In</p>
          </div>
        </div>
        <div className="signup">
          <p>Don't have an account ? Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
