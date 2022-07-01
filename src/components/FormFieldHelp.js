import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function FormFieldHelp(props) {
  return (
    <div className="FormFieldHelp">
      <FontAwesomeIcon icon={faCircleQuestion} />
    </div>
  );
}
