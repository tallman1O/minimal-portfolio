import { Separator } from "@/components/ui/separator";
import { About, Banner, GithubGraph, ProfilePicture, TechStack, Testimonials, WorkExperience, Projects } from "@/features/index";


const Home = () => {
  return (
    <div className="mb-24">
      <Banner />
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
      <Projects />
      <Separator />
      <Testimonials />
    </div>
  );
};

export default Home;
