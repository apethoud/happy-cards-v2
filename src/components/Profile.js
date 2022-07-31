import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import { fetchTestSavedCardsByUserId, fetchTestUserDataById } from "../api/api";
import { Text } from "./StyledComponents";

export default function Profile(props) {
  const [userCards, setUserCards] = useState([]);
  const {
    loggedInUser: { name, email, created },
  } = useContext(UserContext);
  let { userId } = useParams();

  useEffect(() => {
    const fetchedCards = fetchTestSavedCardsByUserId(userId);
    setUserCards(fetchedCards);
  }, [userId]);

  return (
    <>
      <Text>Hello {name}!</Text>
      <Text>Email: {email}</Text>
      <Text>Member since: {created}</Text>
    </>
  );
}
