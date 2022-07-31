import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Label, Input, Button, Text } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import { fetchTestUserDataByEmail } from "../api/api";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  let { setLoggedInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function loginUser(user) {
    setLoggedInUser(user);
    navigate("/card-builder");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = fetchTestUserDataByEmail(email);
    console.log("user is: ", user);
    if (user && password === "abc123") {
      loginUser(user);
    } else {
      setShowLoginError(true);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 200,
      }}
    >
      <div style={{ width: 400 }}>
        <form onSubmit={handleSubmit}>
          <div>Login</div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {showLoginError && <Text>Error: Invalid credentials</Text>}
          <Button primary type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
