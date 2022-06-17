import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HighlightCard(props) {
  return (
    <div className="HighlightCard">
      <div className="HighlightCard-Icon">
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </div>
      <div className="HighlightCard-Header">{props.header}</div>
      <div className="HighlightCard-Subtext">{props.subtext}</div>
    </div>
  );
}
