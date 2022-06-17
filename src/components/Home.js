import HighlightCard from "./HighlightCard";

export default function Home() {
  return (
    <div className="Home-Container">
      <div className="Home-HeroSection">
        <h1 style={{ padding: 6, backgroundColor: "darkturquoise" }}>
          Send them a smile with HappyCards!
        </h1>
        <h2>
          Choose from thousands of uniquely-themed holiday cards for 500+
          different holidays
        </h2>
      </div>
      <div className="Home-HighlightsSection">
        <HighlightCard
          header="Select a Holiday"
          subtext="Choose from 500+ holidays, the most of any e-card maker."
        />
        <HighlightCard
          header="Pick a Design"
          subtext="Explore hundreds of amazing designs curated by our expert designers."
        />
        <HighlightCard
          header="Let Us Deliver It"
          subtext="We'll automatically send it to your loved one on a date you select."
        />
      </div>
    </div>
  );
}
