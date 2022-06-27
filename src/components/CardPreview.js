import {
  CardPreviewPlaceholderText as PlaceholderText,
  CardPreviewText,
} from "./StyledComponents";

export default function CardPreview(props) {
  const { recipientName, selectedHolidayName, senderName } = props;

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
