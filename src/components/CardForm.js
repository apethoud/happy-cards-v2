import { useState, useRef } from "react";
import HolidayPickerModal from "./HolidayPickerModal";
import LabeledTextInput from "./LabeledTextInput";

export default function CardForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [selectedHolidayName, setSelectedHolidayName] = useState("");
  const [senderName, setSenderName] = useState("");
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
          <label className="Label">Pick a Holiday</label>
          {selectedHolidayName ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 16 }}>{selectedHolidayName}</div>
              <div
                style={{ color: "#007d80", cursor: "pointer" }}
                onClick={() => setIsModalOpen(true)}
              >
                Edit
              </div>
            </div>
          ) : (
            <button
              className="Button"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Choose
            </button>
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
        <button type="button" className="Button">
          Cancel
        </button>
        <button type="submit" className="Button PrimaryButton">
          Submit
        </button>
      </form>
      <HolidayPickerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedHolidayName={setSelectedHolidayName}
      />
    </>
  );
}
