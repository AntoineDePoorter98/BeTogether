import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </div>
  );
};

export default App;
