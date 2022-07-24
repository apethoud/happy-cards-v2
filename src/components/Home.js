import HighlightCard from "./HighlightCard";
import {
  faCalendarDays,
  faObjectGroup,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import {
  Button,
  HeaderText,
  HomeHeroHeaderText,
  HomeHeroSubheadText,
} from "./StyledComponents";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home-Container">
      <div className="Home-HeroSection">
        <HomeHeroHeaderText>
          Send them a smile with HappyCards!
        </HomeHeroHeaderText>
        <HomeHeroSubheadText>
          Choose from thousands of uniquely-themed holiday cards for 250+
          different holidays
        </HomeHeroSubheadText>
      </div>
      <div className="Home-HighlightsSection">
        <HighlightCard
          icon={faCalendarDays}
          header="Select a Holiday"
          subtext="Choose from 250+ holidays, the most of any e-card maker."
        />
        <HighlightCard
          icon={faObjectGroup}
          header="Pick a Design"
          subtext="Explore hundreds of amazing designs curated by our expert designers."
        />
        <HighlightCard
          icon={faPaperPlane}
          header="Let Us Deliver It"
          subtext="We'll automatically send it to your loved one on a date you select."
        />
      </div>
      <div className="Home-CallToActionSection">
        <HeaderText style={{ margin: 20 }}>
          What are you waiting for? Give it a whirl!
        </HeaderText>
        <Link to="card-builder">
          <Button primary>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
