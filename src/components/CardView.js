import {
  CardPreviewText,
  CardPreviewPlaceholderText as PlaceholderText,
} from "./StyledComponents";

export default function CardView({
  recipientName,
  selectedHolidayName,
  senderName,
}) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <CardPreviewText>Hey&nbsp;</CardPreviewText>
        {recipientName ? (
          <CardPreviewText>{recipientName}</CardPreviewText>
        ) : (
          <PlaceholderText>Recipient Name</PlaceholderText>
        )}
        <CardPreviewText>!</CardPreviewText>
      </div>
      <div style={{ display: "flex" }}>
        <CardPreviewText>I hope you have a great&nbsp;</CardPreviewText>
        {selectedHolidayName ? (
          <CardPreviewText>{selectedHolidayName}</CardPreviewText>
        ) : (
          <PlaceholderText>Holiday</PlaceholderText>
        )}
        <CardPreviewText>!</CardPreviewText>
      </div>
      <div style={{ display: "flex" }}>
        <CardPreviewText>From&nbsp;</CardPreviewText>
        {senderName ? (
          <CardPreviewText>{senderName}</CardPreviewText>
        ) : (
          <PlaceholderText>Sender Name</PlaceholderText>
        )}
      </div>
    </>
  );
}
