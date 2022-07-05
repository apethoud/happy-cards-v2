import { useState, useRef } from "react";
import HolidayPickerModal from "./HolidayPickerModal";
import LabeledTextInput from "./LabeledTextInput";
import { Label, Button, Link } from "./StyledComponents";

export default function CardForm({
  recipientName,
  setRecipientName,
  selectedHolidayName,
  setSelectedHolidayName,
  senderName,
  setSenderName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  // const exampleRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      recipientName,
      recipientEmail,
      holidayName: selectedHolidayName,
      senderName,
      senderEmail,
    };
    console.log("payload is: ", payload);
    // console.log("exampleRef.current.value is: ", exampleRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LabeledTextInput
          name="Their Name"
          value={recipientName}
          setValue={setRecipientName}
        />
        <LabeledTextInput
          name="Their Email"
          value={recipientEmail}
          setValue={setRecipientEmail}
        />
        <div className="Form-InputWrapper">
          <Label>Pick a Holiday</Label>
          {selectedHolidayName ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 16 }}>{selectedHolidayName}</div>
              <Link onClick={() => setIsModalOpen(true)}>Edit</Link>
            </div>
          ) : (
            <Button type="button" onClick={() => setIsModalOpen(true)}>
              Choose
            </Button>
          )}
        </div>
        <LabeledTextInput
          name="Your Name"
          value={senderName}
          setValue={setSenderName}
        />
        <LabeledTextInput
          name="Your Email"
          value={senderEmail}
          setValue={setSenderEmail}
        />
        {/* <div>
          <label htmlFor="exampleRef">
            Uncontrolled Input Example (using useRef())
          </label>
          <input name="exampleRef" type="text" ref={exampleRef} />
        </div> */}
        <Button type="button">Cancel</Button>
        <Button primary type="submit">
          Submit
        </Button>
      </form>
      <HolidayPickerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedHolidayName={setSelectedHolidayName}
      />
    </>
  );
}
