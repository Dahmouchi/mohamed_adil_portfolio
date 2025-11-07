import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Naman Barkiya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/",
  },

  {
    name: "Gmail",
    username: "naman",
    icon: Icons.gmail,
    link: "mailto:mohamedadilsimon123@gmail.com",
  },
];
