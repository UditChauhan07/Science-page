import React from "react";
import scienza from "../../json/scienza.json";
import { NewsLetter } from "@/utilities/NewsLetter";
import TextText from "@/utilities/Sections/Text&Text";
import ImgText from "@/utilities/Sections/Img&Text";
import Quote from "@/utilities/Sections/Quote";
import PageHead from "@/utilities/Head";
import SEO from "../../json/SEO.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import { WistiaHero } from "@/utilities/WistiaHero";

export default function Scienza({ version }) {
  const { masterHead, sectionOne, sectionTwo, quote, newsletter } =
    scienza[version] || {};
  return (
    <section>
      <PageHead content={SEO[version].science?.SEO} />
      {masterHead.video ? (
        <WistiaHero content={masterHead?.content} video={masterHead.video} />
      ) : (
        <MasterHeadImg data={masterHead} />
      )}
      <div style={{ margin: "3rem 20px" }}>
        <TextText data={sectionOne.sectionContent} />
      </div>
      <ImgText data={sectionTwo} />
      <Quote data={quote} />
      {/*-- <NewsLetter content={newsletter}/> */}
    </section>
  );
}
