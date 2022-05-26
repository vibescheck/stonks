import LoginContext from "./LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { loggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  if (loggedIn.token) {
    navigate("/dashboard");
  } else {
    return (
      <main>
        <h1>stonks!</h1>
        <Link to="/login">
          <button> login </button>
        </Link>
        <Link to="/register">
          <button>register</button>
        </Link>
      </main>
    );
  }
};

export default LandingPage;
