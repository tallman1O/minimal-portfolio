import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/ui/panel";
import AnimatedBlurTestimonials from "@/components/ui/animated-blur-testimonials";
import { USER } from "@/data/user";

function Testimonials() {
  return (
    <Panel id="testimonials">
      <PanelHeader>
        <PanelTitle>Testimonials.</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="relative flex items-center justify-center">
          <div className="max-w-3xl">
            <AnimatedBlurTestimonials data={USER.testimonials} delayDuration={4} />
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
export default Testimonials;
