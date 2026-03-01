import { Banner } from "@/components/banner";
import GithubGraph from "@/components/home/github-graph";
import ProfilePicture from "@/components/profile-header";
import { Separator } from "@/components/separator";
import { TechStack } from "@/components/tech-stack";
import Testimonials from "@/components/testimonials";


const Home = () => {
  return (
    <div className="mb-24">
      <Banner />
      <ProfilePicture />
      <Separator />
      <TechStack />
      <Separator />
      <Testimonials />
      <Separator />
      <GithubGraph />
    </div>
  );
};

export default Home;
