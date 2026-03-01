import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import AnimatedBlurTestimonials, { TestimonialInterface } from "@/components/ui/animated-blur-testimonials";

const DATA: TestimonialInterface[] = [
  {
    name: "dhruv",
    avatar: { src: "https://randomuser.me/api/portraits/lego/4.jpg" },
    message:
      "Was suspicious of Daddy. Now my boss respects me, my ex is jealous, and strangers nod at me. Thanks, Daddy",
  },

  {
    name: "mtt",
    avatar: { src: "https://randomuser.me/api/portraits/lego/6.jpg" },
    message:
      "I joined Daddy thinking it was a parenting advice site. It wasn’t. But somehow, my life improved—more confidence, better decisions, and free high-fives from the universe. Was it magic? Destiny? Daddy's Magic? Vim? Either way, I’m staying",
  },
];

function Testimonials() {
  return (
    <Panel id="testimonials">
      <PanelHeader>
        <PanelTitle>Testimonials</PanelTitle>
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
