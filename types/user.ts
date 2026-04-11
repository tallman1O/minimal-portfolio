export type User = {
    firstName: string
    lastName: string
    displayName: string
    username: string
    gender: "male" | "female" | "non-binary"
    pronouns: string
    bio: string
    morphingText: string[]
    address: string
    email: string
    website: string
    jobTitle: string
    /** Public URL to avatar image */
    avatar: string
    /** SEO keywords list for metadata */
    keywords: string[]
    timeZone: string
    dateCreated: string
  }
  