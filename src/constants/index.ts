import {
  Heart,
  BookOpen,
  Users,
  LightbulbIcon,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import womenEmpowerment from "../assets/women-empowerment-4.jpeg";
import digitalLiteracy from "../assets/girls-learning-2.jpg";

// Team image imports
import team1 from "../assets/ibrahim-yakub.jpeg";
import team2 from "../assets/kareem-onivehu.jpeg";
import team3 from "../assets/yemi-balogun.jpeg";
import team4 from "../assets/emmanuel-yaba-abel.jpeg";
import team5 from "../assets/joshua-toyin-mercy.jpeg";

// Partners Image imports
import partner1 from "../assets/ube-img.jpg";
import Partner2 from "../assets/senior-citizens.jpeg";
import partner3 from "../assets/oladele-john-niyi.jpeg";
import partner4 from "../assets/partner5.jpeg";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Values", href: "#values" },
  { name: "Team", href: "#team" },
  { name: "Impact", href: "#impact" },
  { name: "Partners", href: "#partners" },
  { name: "Blog", href: "#blog" },
  { name: "Donate", href: "#donate" },
  { name: "Contact", href: "#contact" },
];

export const programs = [
  {
    title: "Education Access",
    description:
      "Providing access to quality education and resources, bridging gaps and promoting inclusive learning for girls and young women.",
    icon: BookOpen,
  },
  {
    title: "Leadership Development",
    description:
      "Empowering girls and women through mentoring, coaching, and leadership development programs, promoting gender equality.",
    icon: Users,
  },
  {
    title: "Capacity Building",
    description:
      "Implementing human capacity development initiatives, equipping individuals with skills and knowledge to become changemakers.",
    icon: GraduationCap,
  },
];

export const values = [
  {
    title: "Empowerment",
    description:
      "We believe in empowering individuals to reach their full potential.",
    icon: Heart,
  },
  {
    title: "Inclusivity",
    description:
      "We foster a safe and supportive environment for all, especially girls and women.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all we do, driven by faith, hard work, and dedication.",
    icon: LightbulbIcon,
  },
  {
    title: "Integrity",
    description: "We operate with integrity, transparency, and accountability.",
    icon: ShieldCheck,
  },
];

export const teamMembers = [
  {
    name: "Ibrahim Danasebe Yakub ",
    role: "Project Manager",
    image: `${team1}`,
    // bio: "Jane is passionate about creating opportunities for young women and has over 15 years of experience in the non-profit sector.",
  },
  {
    name: "Kareem Onivehu Abdulraheem ",
    role: "State Lead",
    image: `${team2}`,
    bio: "Sarah leads our educational initiatives and brings expertise in curriculum development and program management.",
  },
  {
    name: "Yemi Balogun",
    role: "Communication Strategist",
    image: `${team3}`,
    bio: "Amina works closely with local communities to ensure our programs reach those who need them most.",
  },
  {
    name: "Emmanuel Yaba Abel",
    role: "Assistant Program manager",
    image: `${team4}`,
    bio: "Grace ensures our resources are managed effectively to maximize our impact in communities.",
  },
  {
    name: "Joshua Toyin Mercy",
    role: "Legal Adviser",
    image: `${team5}`,
    bio: "Joshua Toyin is a legal expert who ensures our programs comply with local laws and regulations.",
  },
];

export const impactStats = [
  { number: "5,000+", label: "Girls Educated" },
  { number: "200+", label: "Community Programs" },
  { number: "50+", label: "Partner Schools" },
  { number: "20+", label: "Nigerian States Reached" },
];

export const testimonials = [
  {
    quote:
      "The Bridge Inspire Foundation changed my life. Their mentorship program gave me the confidence to pursue my education and believe in myself.",
    name: "Chioma N.",
    role: "Program Beneficiary, Lagos",
    image:
      "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "Through the leadership training, I've learned skills that have helped me become a voice for change in my community. I'm now mentoring other young girls.",
    name: "Fatima A.",
    role: "Leadership Program Graduate",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const contactInfo = {
  email: "bridgeinspirefoundation@gmail.com",
  phone: "+234 XXX XXX XXXX",
  address: "Abuja, Nigeria",
  social: {
    facebook: "The Bridge Inspire Foundation",
    instagram: "BridgeInspire",
    twitter: "BridgeInspire",
  },
};

export const partners = [
  {
    name: "Save Protect & Empower Foundation",
    category: "Non-Profit Organization",
    logo: `${partner1}`,
    description:
      "Our organization took significant strides in combating gender-based violence during the 16 Days of Activism. ",
  },
  {
    name: "Peace and Reconciliation Initiative",
    category: "Non-Profit Organization",
    logo: `${Partner2}`,
    description: "Collaborating on educational programs and policy advocacy.",
  },
  {
    name: "Oladele John Niyi Foundation",
    category: "Non-Profit Organization",
    logo: `${partner3}`,
    description:
      "Supporting financial literacy and economic empowerment initiatives.",
  },
  {
    name: "Woawoo  Card",
    category: "Corporate Partner",
    logo: `${partner4}`,
    description: "Supporting digital literacy and STEM education programs.",
  },
  // {
  //   name: "Women's Health Alliance",
  //   category: "Healthcare Organization",
  //   logo: "https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   description: "Collaborating on health education and wellness programs.",
  // },
  // {
  //   name: "Community Development Bank",
  //   category: "Financial Institution",
  //   logo: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   description:
  //     "Supporting financial literacy and economic empowerment initiatives.",
  // },
];

export const blogPosts = [
  {
    id: 1,
    title: "Empowering Girls Through Digital Literacy",
    excerpt:
      "How our Tech4Girls program is bridging the digital divide and creating opportunities for young women in Nigeria.",
    image: `${digitalLiteracy}`,
    author: "Sarah Johnson",
    date: "2024-02-15",
    category: "Education",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Breaking Barriers: Women in Leadership",
    excerpt:
      "Success stories from our leadership development program and how it's transforming communities.",
    image: `${womenEmpowerment}`,
    author: "Amina Yusuf",
    date: "2024-02-10",
    category: "Leadership",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "The Impact of Mentorship",
    excerpt:
      "How mentorship programs are creating lasting change in the lives of young women across Nigeria.",
    image:
      "https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Jane Doe",
    date: "2024-02-05",
    category: "Mentorship",
    readTime: "6 min read",
  },
];
