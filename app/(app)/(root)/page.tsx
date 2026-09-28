import { Separator } from "@/components/ui/separator";
import { About, Banner, GithubGraph, MonkeytypeGraph, ProfilePicture, TechStack, Testimonials, WorkExperience, Projects } from "@/features/index";


const Home = () => {
  return (
    <div className="mb-24">
      <ProfilePicture />
      <Separator />
      <About />
      <Separator />
      <TechStack />
      <Separator />
      <WorkExperience />
      <Separator />
      <GithubGraph />
      <Separator />
      <MonkeytypeGraph />
      <Projects />
      <Separator />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Home;
