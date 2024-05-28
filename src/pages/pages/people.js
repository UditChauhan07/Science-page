import LandingPage from "@/componets/LandingLayout";
import landingData from "../../../json/landing.json";
let pageSlug= "people-LP-V2";
let isHideScript = landingData[pageSlug]?.isHideScript
const People = () => {
  return <LandingPage page={pageSlug} />;
};
People.hideLayout = true;
People.isHideScript = isHideScript;
export default People;
