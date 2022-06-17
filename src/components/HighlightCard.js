export default function HighlightCard(props) {
  return (
    <div className="HighlightCard">
      <div className="HighlightCard-Header">{props.header}</div>
      <div className="HighlightCard-Subtext">{props.subtext}</div>
    </div>
  );
}
