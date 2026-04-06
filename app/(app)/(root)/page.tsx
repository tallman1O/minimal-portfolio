import About from "@/features/about";
import { Banner } from "@/features/banner";
import GithubGraph from "@/features/github-graph";
import ProfilePicture from "@/features/profile-header";
import { Separator } from "@/components/ui/separator";
import { TechStack } from "@/features/tech-stack";
import Testimonials from "@/features/testimonials";
import WorkExperience from "@/features/work-experience";
import Projects from "@/features/projects";


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
