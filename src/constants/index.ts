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
import team6 from "../assets/opeyemi-ologun.jpeg";

// Partners Image imports
import partner3 from "../assets/oladele-john-niyi.jpeg";
import partner4 from "../assets/partner5.jpeg";
import partner6 from "../assets/partner6.jpeg";
import partner7 from "../assets/partner7.jpeg";

// Testimonials Image imports
import testimonial1 from "../assets/team-and-student-2.jpeg";
import testimonial2 from "../assets/testimony-2.jpeg";
import genderViolence from "../assets/gender-violence-2.jpeg";
import buildCapacity from "../assets/building-capacity.jpg";
import digitalSkills from "../assets/digital_skill_inpire.jpeg";
import christmasMiracle from "../assets/christmas_miracle.jpeg";
import christmasMiracle2 from "../assets/christmas_miracle-2.jpeg";
import christmasMiracle3 from "../assets/christmas_miracle-3.jpeg";
import christmasMiracle4 from "../assets/christmas_miracle-4.jpeg";
import empowerGirls from "../assets/empowering-girls.jpeg";
import empowerGirls2 from "../assets/sec-school-girls.jpeg";
import empowerGirls3 from "../assets/kogi-girl-tech.jpeg";

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
  {
    name: "Opeyemi Ologun",
    role: "Advocacy Coordinator/Campaign Manager",
    image: `${team6}`,
    bio: "Opeyemi coordinates our volunteer programs, ensuring a positive experience for all involved.",
  },
];

export const impactStats = [
  { number: "1,000+", label: "Girls Educated" },
  { number: "8+", label: "Community Programs" },
  { number: "20+", label: "Partners" },
  { number: "13", label: "Nigerian States Reached" },
];

export const impactStories = [
  {
    title: "Hauwa's Journey to Healing",
    name: "Hauwa",
    location: "Kano State, Nigeria",
    image: `${genderViolence}`,
    story:
      "On International Women's Day, March 8, 2025, The Bridge Inspire Foundation organized a free digital skills empowerment program for women in business and professionals looking to transition into the digital world. Our goal was to equip them with the tools and knowledge needed to thrive in today's digital landscape.",
    outcomes: [
      "Successful Cesarean operation",
      "Ongoing medical care and support",
      "Access to counseling services",
      "Educational support for continued schooling",
    ],
    meaning:
      "Hauwa's journey underscores the importance of our mission. We're dedicated to empowering girls and women, providing them with the support and resources they need to overcome adversity. Stories like Hauwa's fuel our passion to create lasting change.",
    callToAction:
      "Your support can make a tangible difference in the lives of girls like Hauwa. Help us provide medical care, counseling, and educational support to survivors of gender-based violence.",
    quote:
      "The foundation didn't just save my life; they gave me hope and a future. Now I want to help other girls who might be going through similar situations.",
  },
  {
    title: "Empowering Women through Digital Skills",
    name: "Mrs. Ayodeji Olupeka",
    location: "Nigeria",
    image: `${buildCapacity}`,
    story:
      "Aisha grew up in a community where girls were not encouraged to pursue education, let alone careers in technology. Through our Tech4Girls program, she discovered her passion for coding and digital design. Despite initial resistance from her family, our mentorship and support helped her persist. Today, she's completed her training and works as a junior web developer. Our program has empowered women to take control of their digital presence, improve their business operations, and reach new customers. By providing access to digital skills training and resources, we're helping to bridge the gap between women entrepreneurs and the digital economy.",
    outcomes: [
      "123 women from across Nigeria registered for the program, showcasing the demand for digital skills training.",
      "We offered training in essential digital skills, including: Google Business Profile optimization, Facebook Ads",
      "Website design: Business Management, Data Analytics, Digital Marketing, ",
      "To further support our participants, we provided: Free CAC (Corporate Affairs Commission) registration certificates to 4 business owners, enhancing their credibility and online presence, free e-commerce website design for 6 businesses, enabling them to reach a wider audience.",
    ],
    meaning:
      "This initiative demonstrates our commitment to supporting women's economic empowerment and promoting digital inclusion. By equipping women with the skills and tools they need to succeed online, we are helping to create a more level playing field for women in business.",
    callToAction:
      "Your support can help us continue to provide digital skills training and resources to women entrepreneurs. Consider partnering with us.",
    quote:
      "Hello, Sis. The website is ready. The coach just dropped the link embuk-cake.surge.sh . Thank you so much to Bridge Inspire Foundation for this opportunity. I am so grateful. I am so happy to be a part of this program.",
  },
  {
    title: "Empowering Girls in the Digital Age",
    // name: "Fatima",
    location: "Kogi State, Nigeria",
    image: `${digitalSkills}`,
    story:
      "Through our collaboration with The Heritage and Legacy Foundation, we have equipped over 200 secondary school girls with essential digital skills, bridging the gender digital divide and fostering innovators. Our joint initiative provides digital literacy training, preparing them for the digital era and unlocking tech career opportunities.",
    outcomes: [
      "Digital Skills Training: Provided foundational digital skills, including computer basics and digital communication tools.",
      "Empowering Young Women: Equipped girls with confidence and skills for tech careers.",
      "- Bridging the Gap: Contributed to reducing the gender digital divide.",
      "Family now advocates for girls' education",
    ],
    meaning:
      "Our digital literacy program demonstrates how targeted education can bridge the gender digital divide and create new opportunities for young women in technology.",
    callToAction:
      "Support our digital literacy initiatives to help more girls access technology education and career opportunities.",
    additionalImages: [
      `${empowerGirls}`,
      `${empowerGirls2}`,
      `${empowerGirls3}`,
      ,
    ],
    // quote:
    //   "Education opened doors I never knew existed. Now I'm helping other girls see those same possibilities.",
  },

  {
    title: "Christmas Miracle Project",
    // name: "Fatima",
    location: "Kogi State, Nigeria",
    image: `${digitalSkills}`,
    story:
      "During the COVID-19 pandemic, we launched the Christmas Miracle project to bring joy and support to vulnerable families who couldn't afford a Christmas meal. We provided food baskets to 16 families, including widows, widowers, and single parents. This initiative not only alleviated hunger but also fostered a sense of community and togetherness during challenging times. We believe that even small acts of kindness can make a significant impact on people's lives.",
    outcomes: [
      "16 families received baskets containing essential items like: 5kg of rice, Vegetable oil, Juice, Pack of Maggi ,Cookies",
      " Widows, widowers, and single parents benefited from the initiative",
      "Our project demonstrated the power of community support during challenging times",
      "Family now advocates for girls' education",
    ],
    meaning:
      "The Christmas Miracle project highlights the importance of community support and kindness, especially during difficult times. By providing essential items, we helped families enjoy a festive season despite financial challenges.",
    callToAction:
      "Help us continue bringing hope and support to vulnerable families through our community initiatives.",
    quote:
      "The food basket meant more than just a meal - it showed us that someone cares.",
    additionalImages: [
      `${christmasMiracle}`,
      `${christmasMiracle2}`,
      `${christmasMiracle3}`,
      `${christmasMiracle4}`,
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The Bridge Inspire Foundation changed my life. Their mentorship program gave me schorlarship the confidence to pursue my education and believe in myself.",
    name: "Chioma N.",
    role: "Girls who were awarded scholarships, Lokoja",
    image: `${testimonial1}`,
  },
  {
    quote:
      "Hello, Sis. The website is ready. The coach just dropped the link embuk-cake.surge.sh . Thank you so much to Bridge Inspire Foundation for this opportunity. I am so grateful. I am so happy to be a part of this program.",
    name: "Mrs. Ayodeji Olupeka",
    role: "Beneficiary of the Free Digital Skills Empowerment Program in commemoration of the International Women's Day 2025",
    image: `${testimonial2}`,
  },
];

export const videoTestimonials = [
  {
    id: 1,
    name: "Aisha Mohammed",
    role: "Tech Skills Program Graduate",
    quote:
      "The digital literacy program opened up a whole new world of opportunities for me. Now I'm working as a web developer and mentoring other girls in my community.",
    videoUrl:
      "https://player.vimeo.com/progressive_redirect/playback/735428933/rendition/720p/file.mp4?loc=external",
    thumbnail:
      "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Blessing Okafor",
    role: "Scholarship Recipient",
    quote:
      "Thanks to the Bridge Inspire Foundation's scholarship, I was able to complete my education. Today, I'm a qualified teacher giving back to my community.",
    videoUrl:
      "https://player.vimeo.com/progressive_redirect/playback/735428899/rendition/720p/file.mp4?loc=external",
    thumbnail:
      "https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Halima Ibrahim",
    role: "Leadership Program Participant",
    quote:
      "The leadership training transformed not just my life, but the lives of many girls in my community. We're now leading initiatives for positive change.",
    videoUrl:
      "https://player.vimeo.com/progressive_redirect/playback/735428862/rendition/720p/file.mp4?loc=external",
    thumbnail:
      "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const contactInfo = {
  email: "bridgeinspirefoundation@gmail.com",
  phone: "+234 905 5331 113",
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
    logo: `${partner7}`,
    description:
      "Our organization took significant strides in combating gender-based violence during the 16 Days of Activism. ",
  },
  {
    name: "Peace and Reconciliation Initiative",
    category: "Non-Profit Organization",
    logo: `${partner6}`,
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
