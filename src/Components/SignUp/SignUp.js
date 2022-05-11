import "./SignUp.css";
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
        <div>
          <div>
            <input placeholder="Username"></input>
          </div>
          <div>
            <input placeholder="@ email adress"></input>
          </div>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="horizontal"></div>
          <div className="login">
            <p>Register</p>
          </div>
        </div>
        <div className="signup">
          <p>Allready have an account ? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
