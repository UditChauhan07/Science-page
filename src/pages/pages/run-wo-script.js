import LandingPage from "@/componets/LandingLayout";
import landingData from "../../../json/landing.json";
let pageSlug= "run-LP-V2-WO";
let isHideScript = landingData[pageSlug]?.isHideScript
const Run = () => {
  return <LandingPage page={pageSlug} />;
};
Run.hideLayout = true;
Run.isHideScript = isHideScript;
export default Run;
