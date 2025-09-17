import blogs from "@/public/services/blogs.svg"
import courses from "@/public/services/course.svg"
import test from "@/public/services/test.svg"
import tutoring from "@/public/services/teaching.svg"
import events from "@/public/services/events.svg"
import online from "@/public/services/online.svg"

export const plans = {
    monthly: [
      {
        id: 1,
        title: "Basic Monthly Plan",
        price: 2000,
        description: "Access to any 5 courses of your choice for one month.",
        benefits: [
          "Choose any 5 courses from any category.",
          "One month access",
          "High-quality course materials",
          "Expert instructors",
          "Flexible learning schedule",
          "Access to course updates"
        ],
        popular: false
      },
      {
        id: 2,
        title: "All Courses Monthly Plan",
        price: 5000,
        description: "Unlimited access to all courses across any category for one month.",
        benefits: [
          "Unlimited access to all courses of any category.",
          "One month access",
          "Comprehensive course coverage",
          "Expert guidance and support",
          "Access to all updates and new courses",
          "Ideal for intensive study"
        ],
        popular: true
      },
      {
        id: 3,
        title: "Extended Basic Monthly Plan",
        price: 8000,
        description: "Access to any 5 courses for three months.",
        benefits: [
          "Select any 5 courses from our full catalog",
          "Three months access",
          "Extended learning time",
          "Continuous support from instructors",
          "Regular updates to course materials",
          "Ideal for in-depth preparation"
        ],
        popular: false
      }
    ],
    quarterly: [
      {
        id: 4,
        title: "Basic Quarterly Plan",
        price: 4500,
        description: "Access to any 5 courses of your choice for three months.",
        benefits: [
          "Choose any 5 courses from IELTS, TOEFL, PTE, DET, English, and more.",
          "Three months access",
          "Extended learning period",
          "Comprehensive materials and resources",
          "Expert support available",
          "Regular course updates"
        ],
        popular: false
      },
      {
        id: 5,
        title: "All Courses Quarterly Plan",
        price: 8000,
        description: "Unlimited access to all courses across any category for three months.",
        benefits: [
          "Unlimited access to all available courses including IELTS, TOEFL, PTE, DET, and English.",
          "Three months access",
          "In-depth study with full course coverage",
          "Guidance from expert instructors",
          "Access to all new content and updates",
          "Ideal for extensive preparation"
        ],
        popular: true
      },
      {
        id: 6,
        title: "Extended All Courses Quarterly Plan",
        price: 15000,
        description: "Unlimited access to all courses across any category for six months.",
        benefits: [
          "Unlimited access to all courses for six months",
          "Comprehensive learning experience",
          "Extended access to all course materials",
          "Support from industry experts",
          "Regular updates and new content",
          "Ideal for long-term learning and mastery"
        ],
        popular: false
      }
    ]
  };

export const Service = [
  { 
    name: "blogs", 
    image: blogs, 
    title: "Free Blogs", 
    link: "/blogs", 
    content: () => {
      return (
        <p>
          Explore a variety of free blogs packed with tips, strategies, and updates 
          to help you excel in your studies or professional journey. Dive into 
          topics that matter the most to you.
        </p>
      );
    }
  },
  { 
    name: "courses", 
    image: courses, 
    title: "Certified Courses", 
    link: "/courses", 
    content: () => {
      return (
        <p>
          Browse our certified courses, designed by industry experts to enhance your 
          skills and knowledge. Gain valuable certifications that boost your career 
          prospects.
        </p>
      );
    }
  },
  { 
    name: "demo", 
    image: tutoring, 
    title: "Free Demo Sessions", 
    link: "/about", 
    content: () => {
      return (
        <p>
          Curious about our teaching style? Book a free demo session to experience 
          our personalized and interactive learning approach firsthand.
        </p>
      );
    }
  },
  { 
    name: "tutoring", 
    image: online, 
    title: "1-1 Online Classes", 
    link: "/about", 
    content: () => {
      return (
        <p>
          Join our 1-1 online classes for a tailored learning experience. Get 
          individual attention and customized lesson plans to meet your unique needs.
        </p>
      );
    }
  },
  { 
    name: "events", 
    image: events, 
    title: "Exclusive Events", 
    link: "/events", 
    content: () => {
      return (
        <p>
          Participate in our exclusive events, workshops, and webinars. Network 
          with like-minded individuals and gain valuable insights from experts.
        </p>
      );
    }
  },
  { 
    name: "mock test", 
    image: test, 
    title: "Daily Mock Test", 
    link: "/dashboard/mockTest", 
    content: () => {
      return (
        <p>
          Practice with our daily mock tests to prepare for exams effectively. Get 
          detailed feedback and improve your performance consistently.
        </p>
      );
    }
  },
];
  