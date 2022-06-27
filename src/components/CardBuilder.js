import { useState } from "react";
import CardForm from "./CardForm";
import CardPreview from "./CardPreview";
import { CardPreviewWrapper } from "./StyledComponents";

export default function CardBuilder() {
  const [recipientName, setRecipientName] = useState("");
  const [selectedHolidayName, setSelectedHolidayName] = useState("");
  const [senderName, setSenderName] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <div className="CardForm-Wrapper">
        <CardForm
          recipientName={recipientName}
          setRecipientName={setRecipientName}
          selectedHolidayName={selectedHolidayName}
          setSelectedHolidayName={setSelectedHolidayName}
          senderName={senderName}
          setSenderName={setSenderName}
        />
      </div>
      <CardPreviewWrapper>
        <CardPreview
          recipientName={recipientName}
          selectedHolidayName={selectedHolidayName}
          senderName={senderName}
        />
      </CardPreviewWrapper>
    </div>
  );
}
