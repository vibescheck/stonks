import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../services/userService.js";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  /* await getUserDetails(auth) */

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoading(true);
      getUserDetails()
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      navigate("*", { status: 401, message: "Not authorized" });
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/")
  };

  return (
    <main>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <>
          <h1>Welcome, {user.username}</h1>
          <h2>Name: {user.email}</h2>
          <h2>Email: {user.name}</h2>
        </>
      )}

      <button onClick={logout}> logout </button>
    </main>
  );
}
