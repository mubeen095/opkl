import Certificate from "@/component/Elite/Certificate";
import CourseFeeSection from "@/component/Elite/CourseFeeSection";
import EliteHero from "@/component/Elite/EliteHero";
import EliteOverview from "@/component/Elite/EliteOverview";
import EliteSyllabusContent from "@/component/Elite/EliteSyllabusContent";
import Faq from "@/component/Elite/Faq";
import KeyHighlight from "@/component/Elite/KeyHighlight";
import PopularClasses from "@/component/Elite/PopularClasses";
import ReviewSection from "@/component/Elite/ReviewSection";
import React from "react";

const EpicProgram = ({ params }) => {
  const { page } = params;
  const validPages = [
    "DSAPython",
    "DSAJava",
    "DSACPP",
    "uiux",
    "digitalmarketing",
  ];

  if (!validPages.includes(page)) {
    return <h1>Page Not Found</h1>;
  }

  return (
    <div className="relative pb-[100px] ">
      <EliteHero page={page} />
      <EliteOverview page={page} />
      <EliteSyllabusContent page={page} />
      <KeyHighlight />
      <Certificate />
      <PopularClasses />
      <ReviewSection />
      <CourseFeeSection page={page} />
      <Faq />
    </div>
  );
};

export async function generateStaticParams() {
  const validPages = [
    "DSAPython",
    "DSAJava",
    "DSACPP",
    "uiux",
    "digitalmarketing",
  ];
  return validPages.map((page) => ({ page }));
}

export default EpicProgram;
