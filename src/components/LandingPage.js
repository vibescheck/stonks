import { Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <h1>stonks!</h1>
      <Link to="/login">
        <button> login </button>
      </Link>
      <Link to="/register">
        <button> register </button>
      </Link>
    </main>
  );
};

export default LandingPage;
