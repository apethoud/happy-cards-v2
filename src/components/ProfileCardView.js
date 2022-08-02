import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTestSavedCardById } from "../api/api";
import { UserContext } from "../contexts/UserContext";
import CardView from "./CardView";

export default function ProfileCardView() {
  const [card, setCard] = useState(null);
  let { cardId } = useParams();
  cardId = Number(cardId);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    const fetchedCard = fetchTestSavedCardById(cardId);
    setCard(fetchedCard);
  }, [cardId]);
  return (
    <>
      {card && loggedInUser && (
        <CardView
          recipientName={card.recipientName}
          selectedHolidayName={card.holidayName}
          senderName={loggedInUser.name}
        />
      )}
      {!card && !loggedInUser && <div>No card selected.</div>}
    </>
  );
}
