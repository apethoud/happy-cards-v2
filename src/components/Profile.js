import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchTestSavedCardsByUserId, fetchTestUserDataById } from "../api/api";
import { ModalTableRow, Text } from "./StyledComponents";
import ProfileCard from "./ProfileCard";

export default function Profile(props) {
  const [userCards, setUserCards] = useState(null);
  console.log("userCards (Profile.js) is: ", userCards);
  const {
    loggedInUser: { name, email, created },
  } = useContext(UserContext);
  let { userId } = useParams();
  userId = Number(userId);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userId (Profile.js) is: ", userId);
    const fetchedCards = fetchTestSavedCardsByUserId(userId);
    setUserCards(fetchedCards);
  }, [userId]);

  function handleRowClick(cardId) {
    navigate(`/sent-cards/${cardId}`);
  }

  return (
    <>
      <ProfileCard title="Account Info">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Member since: {created}</div>
      </ProfileCard>
      <ProfileCard title="Sent Cards">
        {userCards ? (
          userCards.map((card) => (
            <ModalTableRow
              index={card.id}
              onClick={() => handleRowClick(card.id)}
            >
              {card.holidayName}
            </ModalTableRow>
          ))
        ) : (
          <div>No cards sent yet.</div>
        )}
      </ProfileCard>
      <ProfileCard>
        <Outlet />
      </ProfileCard>
      <ProfileCard title="Billing">
        <div>Billing here</div>
      </ProfileCard>
    </>
  );
}
