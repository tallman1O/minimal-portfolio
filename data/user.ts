import { ASSETS_URL } from "@/env";
import type { User } from "@/types/user"

export const USER = {
  firstName: "Mehul",
  lastName: "Uttam",
  displayName: "Mehul Uttam",
  username: "tallman1O",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter. ",
  morphingText: ["Software Engineer", "UI Engineer", "Builder"],
  address: "Pune, Maharashtra",
  email: "mehulsavio@gmail.com", // base64 encoded
  website: "https://mehul.codes",
  jobTitle: "UI Engineer",
  avatar: `${ASSETS_URL}/images/mehul.png`,
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
