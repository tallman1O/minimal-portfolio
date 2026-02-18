import Image from "next/image";

type TechStack = {
  name: string;
  icon: string;
}

const TECH_STACK: TechStack[] = [
  {
    name: "React",
    icon: "/icons/react.svg"
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg"
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg"
  },
]

export const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {TECH_STACK.map((tech) => (
        <div key={tech.name} className="flex items-center gap-2">
          <Image src={tech.icon} alt={tech.name} width={20} height={20} />
          {tech.name}
        </div>
      ))}
    </div>
  )
}