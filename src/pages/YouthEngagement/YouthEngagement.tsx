import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

interface Story {
  name: string;
  title: string;
  age: number;
  location: string;
  quote: string;
}

const stories: Story[] = [
  {
    name: "Amina",
    title: "Digital Skills Graduate",
    age: 23,
    location: "Mombasa",
    quote:
      "Before joining Swahili Port Hub, I was unemployed and unsure of my future. The Digital Skills Bootcamp gave me confidence, job-readiness, and a community. I now work as a remote content manager and train other young women in digital literacy.",
  },
  {
    name: "Joseph",
    title: "Youth Mentor & Peer Leader",
    age: 26,
    location: "Likoni",
    quote:
      "I joined as a participant and left as a mentor. Through the leadership training program, I discovered my potential. Today, I run a youth group that supports over 50 young people in community clean-up and civic education projects.",
  },
  {
    name: "Fatma",
    title: "Entrepreneurship Program Alumna",
    age: 21,
    location: "Old Town",
    quote:
      "Thanks to Swahili Port Hub, I turned my small baking hobby into a real business. The training on business planning and marketing helped me open a kiosk and grow my customer base. I now mentor young girls who want to start businesses.",
  },
  {
    name: "Suleiman",
    title: "Creative Arts Program Participant",
    age: 19,
    location: "Kisauni",
    quote:
      "I used to feel invisible. Through the arts program, I found a voice through poetry and performance. I’ve performed at two local festivals and I'm now working on a documentary about youth in Mombasa.",
  },
  {
    name: "Zuwena",
    title: "Parent & Community Advocate",
    age: 35,
    location: "Tudor",
    quote:
      "My son was part of the coding club, and the change in him is unbelievable. He’s now confident, curious, and dreams of becoming a software engineer. As a parent, I’ve also learned how to support and guide him better.",
  },
];

interface SuccessStoriesProps {
  openStoryModal: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ openStoryModal }) => {
  return (
    <section className="success-stories py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Success Stories: <span className="text-gradient-blue">Voices from the Community</span>
          </h2>
          <p className="text-gray-700">
            Real stories from individuals whose lives have been transformed through our youth engagement programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-swahilipot-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${story.name}&background=0D8ABC&color=fff`} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <CardDescription className="text-swahilipot-600 font-medium">
                      {story.title}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative pt-2">
                  <div className="absolute top-0 left-0 text-5xl leading-none text-swahilipot-200">"</div>
                  <p className="relative z-10 italic text-gray-700 pl-6 pr-2">
                    {story.quote}
                  </p>
                  <div className="absolute bottom-0 right-0 text-5xl leading-none text-swahilipot-200">"</div>
                </div>
              </CardContent>
              <div className="px-6 pb-5 text-sm text-gray-500">
                {story.age} years old | {story.location}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={openStoryModal}
            className="px-6 py-3 bg-swahilipot-600 hover:bg-swahilipot-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouthEngagement;
