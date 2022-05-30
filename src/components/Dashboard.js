import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../services/userService.js";
import loginStatus from "./loginStatus.js";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus()) {
      setLoading(true);
      getUserDetails()
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error)
          navigate("*", { status: 500, message: ("Server error " + error.response.data) })
        });
    } else {
      alert("Please login first.")
      navigate("/login");
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/")
  };

  return (
    <main>
      {loading ? (
        <p>Retrieving info ... </p>
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
