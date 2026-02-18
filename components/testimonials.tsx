import AnimatedBlurTestimonials, { TestimonialInterface } from "@/components/ui/animated-blur-testimonials";

const DATA: TestimonialInterface[] = [
  {
    name: "dhruv",
    avatar: { src: "https://randomuser.me/api/portraits/lego/4.jpg" },
    message:
      "Was suspicious of Daddy. Now my boss respects me, my ex is jealous, and strangers nod at me. Thanks, Daddy",
  },

  {
    name: "mehul",
    avatar: { src: "https://randomuser.me/api/portraits/lego/6.jpg" },
    message:
      "I joined Daddy thinking it was a parenting advice site. It wasn’t. But somehow, my life improved—more confidence, better decisions, and free high-fives from the universe. Was it magic? Destiny? Daddy's Magic? Vim? Either way, I’m staying",
  },
];

function Testimonials() {
  return (
    <div className="box relative flex min-h-[400px] items-center justify-center px-3 py-8">
      <div className="max-w-[450px]">
        <AnimatedBlurTestimonials data={DATA} delayDuration={4} />
      </div>
    </div>
  );
}
export default Testimonials;
