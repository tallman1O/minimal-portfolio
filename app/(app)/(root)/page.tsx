import About from "@/components/features/about";
import { Banner } from "@/components/features/banner";
import GithubGraph from "@/components/features/github-graph";
import ProfilePicture from "@/components/features/profile-header";
import { Separator } from "@/components/separator";
import { TechStack } from "@/components/features/tech-stack";
import Testimonials from "@/components/features/testimonials";
import WorkExperience from "@/components/features/work-experience";
import Projects from "@/components/features/projects";


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
