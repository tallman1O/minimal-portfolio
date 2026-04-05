import About from "@/components/home/about";
import { Banner } from "@/components/home/banner";
import GithubGraph from "@/components/home/github-graph";
import ProfilePicture from "@/components/home/profile-header";
import { Separator } from "@/components/separator";
import { TechStack } from "@/components/home/tech-stack";
import Testimonials from "@/components/home/testimonials";
import WorkExperience from "@/components/home/work-experience";
import Projects from "@/components/home/projects";


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
