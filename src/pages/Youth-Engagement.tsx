import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Target, Users, Megaphone, Handshake, Book, Lightbulb, Link } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const YouthEngagement = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  
  return (
    <>
      <Navbar />
      <main>
        {/* Youth and Community Engagement Program */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">      
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Youth and
                <span className="text-gradient-blue">
                  {" "}
                  Community Engagement
                </span>{" "}
                Program
              </h1>
              <p className="text-xl text-gray-700">
                Youth empowerment and social transformation by fostering an
                environment where young people can express their ideas, engage
                in decision-making processes, and actively contribute to their
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Core <span className="text-gradient-blue">Objectives</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  The Youth Engagement Program connects Swahilipot Hub with universities across the coastal
                  region through student representatives who promote our initiatives, organize campus events,
                  and build communities of innovation on their campuses.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Handshake className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Meaningful Youth Engagement</h3>
                      <p className="text-gray-600"> Providing platforms for young people to voice their opinions, participate in co-creation, and engage in leadership roles within Swahilipot Hub and beyond.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaMagnifyingGlass className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Policy and Advocacy Training</h3>
                      <p className="text-gray-600"> Equipping young advocates with the knowledge and skills needed to influence policy decisions and hold leaders accountable.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Book className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Capacity Building and Resource Sharing</h3>
                      <p className="text-gray-600"> Facilitating knowledge-sharing, skills training, and collaboration among youth organizations and community hubs.</p>
                    </div>
                  </div>


                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1704756438032-6650a8d6749c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dGglMjBlbmdhZ2VtZW50JTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
                    alt="Youth Engagement presents"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Programs and Initiatives */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Key Programs and <span className="text-gradient-blue">Initiatives</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Youth Advisory Group (YAG)</CardTitle>
                </CardHeader>
                <CardContent>
                  The Youth Advisory Group (YAG) represents young people in Mombasa, advising Swahilipot Hub and ensuring youth voices are included in decisions. Members serve for up to two years and come from all sub-counties, including representatives from Kwale, Kilifi, and a Person with Disability.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Youth Hub Network (YHN)</CardTitle>
                </CardHeader>
                <CardContent>
                  The Youth Hub Network (YHN) supports early-stage social enterprises by offering grants and mentorship to young entrepreneurs, helping them grow their impact. Applications open every year for new innovators to access funding and support.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changemakers Youth Innovation Fund</CardTitle>
                </CardHeader>
                <CardContent>
                  Enhance youth advocacy efforts by educating participants on the budget-making process, public participation, and policy formulation. It equips young people with the necessary tools to influence governance structures, demand accountability, and advocate for policies that benefit the youth and the broader community.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Cycle and Policy Training</CardTitle>
                </CardHeader>
                <CardContent>
                  This fund helps young people learn about budgets, public participation, and policy-making, giving them the skills to influence decisions and advocate for youth-friendly policies.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Girl Boss Program</CardTitle>
                </CardHeader>
                <CardContent>
                  This program empowers young women aged 18-35 by building their entrepreneurial and leadership skills through training and mentorship.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Impact and <span className="text-gradient-blue">Future Directions</span>
              </h2>
              <p className="text-gray-700">
                The Swahilipot Hub Youth and Community Engagement Department continues to play a pivotal role in youth development by:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                    <Handshake className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                  </div>
                  <CardTitle>Youth Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enhancing youth participation in decision-making at different levels.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                    <Lightbulb className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                  </div>
                  <CardTitle>Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Creating opportunities for skill development, entrepreneurship, and leadership.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-swahilipot-100">
                    <Link className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                  </div>
                  <CardTitle>Youth Networks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Strengthening youth networks for better advocacy and impact-driven initiatives.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Success Stories Section */}
        <SuccessStories openStoryModal={() => setIsStoryModalOpen(true)} />
        
        {/* Get Involved Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Join Our <span className="text-gradient-blue">Program</span>
              </h2>
              <p className="text-gray-700">
                Ready to be part of the Youth and Community Engagement Program? There are multiple ways to get involved and make an impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Join an Initiative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Participate in our YAG, YHN, or any of our specific initiatives designed to develop your skills and expand your network.</p>
                  <Button className="w-full">Browse Initiatives</Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Become a Youth Advocate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Represent your community, school or university by becoming an advocate for Swahilipot Hub's youth initiatives.</p>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-swahilipot-100 hover:border-swahilipot-300 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Organizations and individuals can collaborate with us through partnerships, sponsorships, or donations.</p>
                  <Button className="w-full">Contact Us</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Story Submission Modal */}
        <Dialog open={isStoryModalOpen} onOpenChange={setIsStoryModalOpen}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Share Your Story</DialogTitle>
              <DialogDescription>
                Tell us how Swahilipot Hub has impacted your life. Your story could inspire others to join our community.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="age">Age</label>
                  <Input id="age" placeholder="Your age" type="number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="location">Location</label>
                  <Input id="location" placeholder="Where you're from" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="title">Title/Role</label>
                  <Input id="title" placeholder="Your title or role" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="story">Your Story</label>
                <Textarea 
                  id="story" 
                  placeholder="Share how Swahilipot Hub has impacted your life..."
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email Address</label>
                <Input id="email" placeholder="your.email@example.com" type="email" />
                <p className="text-xs text-gray-500 mt-1">We'll contact you if we select your story to feature.</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsStoryModalOpen(false)}>Cancel</Button>
              <Button type="submit">Submit Story</Button>
            </div>
          </DialogContent>
        </Dialog>
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
