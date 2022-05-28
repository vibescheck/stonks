import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  });

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
};

export default LandingPage;
