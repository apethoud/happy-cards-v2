import React, { useEffect, useState } from "react";
import { fetchTestUserDataById } from "../api/api";

const UserContext = React.createContext({});

const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const user = fetchTestUserDataById(userId);
    setLoggedInUser(user);
  }, []);

  const login = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("userId", user.id);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
