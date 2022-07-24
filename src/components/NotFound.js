import { HeaderText, Text } from "./StyledComponents";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFound() {
  return (
    <div className="Centering-Container">
      <FontAwesomeIcon icon={faTriangleExclamation} size="2x" />
      <HeaderText style={{ margin: 20 }}>
        Sorry, we couldn't find that page.
      </HeaderText>
      <Text>Heading home should get you back on track, though.</Text>
    </div>
  );
}
