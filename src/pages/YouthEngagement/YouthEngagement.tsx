import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuccessStories from "./SuccessStories";
import HeroSection from "./Hero";
import CoreObjectives from "./CoreObjectives";
import KeyPrograms from "./KeyPrograms";
import Impacts from "./Impacts";
import StorySubmission from "./StorySubmission";
import Join from "./Join";

const YouthEngagement = () => {
  
  const [isStoryModalOpen, setIsStoryModalOpen] = React.useState(false);
  return (
    <>
      <Navbar />
      <main>

        <HeroSection />
        <CoreObjectives/>
        <KeyPrograms/>
        <Impacts/>
        <SuccessStories openStoryModal={() => setIsStoryModalOpen(true)} />
        <Join />
        <StorySubmission isOpen={isStoryModalOpen} onOpenChange={setIsStoryModalOpen} />

      </main>
      <Footer />
    </>
  );
};

export default YouthEngagement;
