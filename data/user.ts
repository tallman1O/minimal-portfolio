import type { User } from "@/types/user"

export const USER = {
  firstName: "Mehul",
  lastName: "Uttam",
  displayName: "Mehul Uttam",
  username: "tallman1O",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter. ",
  morphingText: ["UI Engineer", "UX Craftsman", "Builder"],
  address: "Pune, Maharashtra",
  email: "mehulsavio@gmail.com", // base64 encoded
  website: "https://mehul.codes",
  jobTitle: "UI Engineer",
  jobs: [
    {
      title: "UI Engineer",
      company: "Repos Energy",
      website: "https://reposenergy.com",
    },
    {
      title: "Frontend Developer Intern",
      company: "Byteswrite",
      website: "https://byteswrite.com",
    },
  ],
  about: `
- **Design Engineer** with 5+ years of experience, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [ZaDark](https://zadark.com) (2022): enhances the Zalo experience on PC & Web
  - 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark)
  - 30k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)
- Creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com): iOS-like wheel picker with inertia scrolling & infinite loop
  - 10k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker)
  - [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort
`,
  avatar: "/images/mehul.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=7",
  timeZone: "Asia/Mumbai",
  keywords: [
    "mehul uttam",
    "tallman1O",
    "mehul",
    "uttam",
    "tallman",
    "1O",
  ],
  dateCreated: "2026-02-19", // YYYY-MM-DD
} satisfies User
