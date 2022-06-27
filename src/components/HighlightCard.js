import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderText,
  HighlightCard as Card,
  HighlightCardIcon as CardIcon,
  Text,
} from "./StyledComponents";

export default function HighlightCard(props) {
  return (
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </CardIcon>
      <HeaderText style={{ margin: 20 }}>{props.header}</HeaderText>
      <Text>{props.subtext}</Text>
    </Card>
  );
}
