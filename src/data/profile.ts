export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  avatar: string;
  cvUrl: string;
}

export const profile: Profile = {
  name: "Jirawat Wongmahasarn",
  title: "MES Software Engineer",
  tagline:
    "Digital Manufacturing Specialist driving OT/IT integration, Industry 4.0 adoption, and smart automation across manufacturing and logistics.",
  email: "jirawatwongmahasan@gmail.com",
  github: "https://github.com/ikjirawat",
  linkedin: "https://linkedin.com/in/ikjirawat",
  avatar: "/images/avatar.jpg",
  cvUrl: "/files/cv.pdf",
};
