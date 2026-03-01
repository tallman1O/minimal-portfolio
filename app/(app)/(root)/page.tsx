import { Banner } from "@/components/home/banner";
import GithubGraph from "@/components/home/github-graph";
import ProfilePicture from "@/components/home/profile-header";
import { Separator } from "@/components/separator";
import { TechStack } from "@/components/home/tech-stack";
import Testimonials from "@/components/home/testimonials";


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
