import LandingPage from "@/componets/LandingLayout";
import landingData from "../../../json/landing.json";
let pageSlug= "vlfg2f8SMW4TsSb";
let isHideScript = landingData[pageSlug]?.isHideScript
const Temp = () => {
  return <LandingPage page={pageSlug} />;
};
Temp.hideLayout = true;
Temp.isHideScript = isHideScript;
export default Temp;