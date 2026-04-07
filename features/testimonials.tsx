import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/ui/panel";
import AnimatedBlurTestimonials, {
  TestimonialInterface,
} from "@/components/ui/animated-blur-testimonials";
import { IconBrandLinkedin } from "@tabler/icons-react";

const DATA: TestimonialInterface[] = [
  {
    name: "Om Gunjal",
    designation: "Research Intern @RRC, IIIT-H",
    social_media_icon: <IconBrandLinkedin className="w-10 h-10 text-blue-500" />,
    avatar: { src: "/images/testimonials/om-gunjal.jpg", fallback: "https://randomuser.me/api/portraits/lego/6.jpg" },
    message: `I worked with Mehul during our time at uni, where he built the website for our Robotics team, MIT Tech Team (robocon.in). What stood out to me was his approach and he genuinely cares about the work he does.
When you're running an organization, you need people you can delegate work to and not worry about it getting done. Mehul is someone you can trust that way.
He built a clean, interactive website for our team and handled the deployment end-to-end. The codebase was also structured well, making it easy for future batches to understand, update, and build on without much friction.
Would happily work with him again and definitely recommend him to any team building something meaningful.`,
  },
];

function Testimonials() {
  return (
    <Panel id="testimonials">
      <PanelHeader>
        <PanelTitle>Testimonials.</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="relative flex items-center justify-center">
          <div className="max-w-3xl">
            <AnimatedBlurTestimonials data={DATA} delayDuration={4} />
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
export default Testimonials;
