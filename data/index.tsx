import {  Home, User, BookOpen, Edit, BarChart, Calendar, GraduationCap, FileText, Settings,  LayoutDashboard, InstagramIcon, LinkedinIcon, YoutubeIcon, Book, Workflow, ListOrdered, Building, WorkflowIcon, DollarSign} from 'lucide-react';

export const NavigationData = [
    { name: "dashboard", route: '/dashboard' },
    { name: "band prediction", route: '/band-prediction' },
    { name: "courses", route: '/courses' },
    { name: "events", route: '/events' },
    { name: "blogs", route: '/blogs' },
    { name: "about", route: '/about' },
] 

export const DashboardRoutes = [
    { name: "dashboard", route: '/dashboard', icon: LayoutDashboard },
    { name: "mockTest", route: '/dashboard/mockTest', icon: FileText },
    { name: "courses", route: '/dashboard/courses', icon: BookOpen },
    { name: "blogs", route: '/dashboard/blogs', icon: Edit },
    { name: "events", route: '/dashboard/events', icon: Calendar },
    { name: "users", route: '/dashboard/users', icon: GraduationCap },
    { name: "my Courses", route: '/dashboard/my-courses', icon: Book },
    { name: "my Events", route: '/dashboard/my-events', icon: Workflow },
    { name: "admin", route: '/dashboard/admin', icon: User },
    { name: "work", route: '/dashboard/work', icon: WorkflowIcon },
    { name: "analysis", route: '/dashboard/analysis', icon: BarChart },
    { name: "orders", route: '/dashboard/orders', icon: ListOrdered },
    { name: "settings", route: '/dashboard/settings', icon: Settings },
    { name: "Home", route: '/', icon: Home },
  ];


export const footerLinks = [ 
  { label: "Youtube", link: "https://www.youtube.com/@IELTSStrategies101official", icon: YoutubeIcon },
  { label: "Instagram", link: "https://www.instagram.com/ieltsstrategies101/", icon: InstagramIcon },
  { label: "Linkedin", link: "https://www.linkedIn.com", icon: LinkedinIcon }
]

export const footerServices = [
  { name: "events", route: '/events' },
  { name: "blogs", route: '/blogs' },
  { name: "courses", route: '/courses' },
] 

export const footerCompany = [
  { name: "home", route: '/' },
  { name: "career", route: '/career' },
  { name: "about", route: '/about' },
] 

export const footerLegal = [
  { name: "Private Policy", route: '/private' },
  { name: "Terms & Conditions", route: '/terms' },
  { name: "Legal", route: '/legals' },
] 

export const QuickTestData = {
  "questions": [
    {
      "type": "grammar",
      "question": "Which of the following sentences is correct?",
      "options": [
        "She don't like apples.",
        "She doesn't like apples.",
        "She didn't liked apples.",
        "She doesn't likes apples."
      ],
      "answer": "She doesn't like apples.",
      "explanation": "The correct sentence uses 'doesn't' because 'like' is the base form of the verb and 'doesn't' is the appropriate negative auxiliary for 'she'."
    },
    {
      "type": "grammar",
      "question": "Choose the correct form of the verb: 'If he ___ earlier, he would have caught the train.'",
      "options": [
        "leave",
        "leaves",
        "had left",
        "left"
      ],
      "answer": "had left",
      "explanation": "'Had left' is the correct form for a third conditional sentence indicating a hypothetical situation in the past."
    },
    {
      "type": "grammar",
      "question": "Select the sentence with correct punctuation.",
      "options": [
        "My favorite colors are blue, green and red.",
        "My favorite colors are blue green, and red.",
        "My favorite colors are blue, green, and red.",
        "My favorite colors are blue, green and, red."
      ],
      "answer": "My favorite colors are blue, green, and red.",
      "explanation": "The correct sentence includes commas to separate items in a list, including the Oxford comma before 'and'."
    },
    {
      "type": "grammar",
      "question": "Which sentence uses the correct past perfect tense?",
      "options": [
        "She had went to the store before I arrived.",
        "She goes to the store before I arrived.",
        "She had gone to the store before I arrived.",
        "She had gone to the store before I arrive."
      ],
      "answer": "She had gone to the store before I arrived.",
      "explanation": "The past perfect tense is formed with 'had' + past participle, so 'had gone' is correct."
    },
    {
      "type": "grammar",
      "question": "Identify the correct form of the adjective: 'This book is ___ than that one.'",
      "options": [
        "good",
        "better",
        "best",
        "well"
      ],
      "answer": "better",
      "explanation": "'Better' is the comparative form of 'good', used to compare two things."
    },
    {
      "type": "reading",
      "question": "What is the main idea of the passage?",
      "options": [
        "The benefits of outdoor activities.",
        "The history of outdoor sports.",
        "The impact of technology on outdoor activities.",
        "The popularity of different outdoor sports."
      ],
      "answer": "The benefits of outdoor activities.",
      "explanation": "The passage primarily discusses how outdoor activities benefit physical and mental health."
    },
    {
      "type": "reading",
      "question": "Which of the following is mentioned as a benefit of outdoor activities?",
      "options": [
        "Improved concentration.",
        "Increased screen time.",
        "Higher stress levels.",
        "Reduced sleep quality."
      ],
      "answer": "Improved concentration.",
      "explanation": "The passage mentions improved concentration as one of the benefits of engaging in outdoor activities."
    },
    {
      "type": "reading",
      "question": "According to the passage, what is a common reason people avoid outdoor activities?",
      "options": [
        "Lack of time.",
        "Lack of interest.",
        "Lack of suitable locations.",
        "Lack of proper equipment."
      ],
      "answer": "Lack of time.",
      "explanation": "The passage states that a common reason people avoid outdoor activities is due to a lack of time."
    },
    {
      "type": "reading",
      "question": "How does the passage suggest overcoming the barrier of lack of time?",
      "options": [
        "Engage in shorter, more frequent activities.",
        "Avoid outdoor activities altogether.",
        "Use technology to track activities.",
        "Seek professional help."
      ],
      "answer": "Engage in shorter, more frequent activities.",
      "explanation": "The passage suggests that engaging in shorter, more frequent outdoor activities can help overcome the barrier of lack of time."
    },
    {
      "type": "reading",
      "question": "What does the passage suggest about the relationship between outdoor activities and mental health?",
      "options": [
        "Outdoor activities have no impact on mental health.",
        "Outdoor activities negatively affect mental health.",
        "Outdoor activities can improve mental health.",
        "Outdoor activities are only beneficial for physical health."
      ],
      "answer": "Outdoor activities can improve mental health.",
      "explanation": "The passage suggests that outdoor activities can have a positive effect on mental health."
    }
  ],
  "passage": {
    "title": "The Benefits of Outdoor Activities",
    "paragraphs": [
      "Engaging in outdoor activities is known to provide numerous benefits for both physical and mental health. Studies have shown that spending time outside can improve cardiovascular health, enhance mood, and reduce stress levels. Activities such as hiking, cycling, and jogging not only boost physical fitness but also offer mental relaxation.",
      "One of the primary advantages of outdoor activities is the improvement in concentration and cognitive function. Research has demonstrated that time spent in natural settings can lead to better focus and enhanced memory retention. This is particularly beneficial for individuals who work in high-stress environments or who need to manage complex tasks.",
      "Despite these benefits, many people find it challenging to incorporate outdoor activities into their daily routines. A common barrier is the lack of time, as busy schedules often leave little room for exercise. However, making small adjustments, such as taking short walks during breaks or scheduling weekend activities, can help address this issue.",
      "In conclusion, the positive impact of outdoor activities on health cannot be overstated. By making an effort to include outdoor exercise in daily life, individuals can experience improved overall well-being and a better quality of life. The key is to find enjoyable activities and integrate them into a manageable routine."
    ]
  }
}

export const partnerTypes = [
  {
    id: "educator",
    icon: <GraduationCap className="text-blue-600 w-6 h-6" />,
    title: "For Educators",
    description:
      "Share your knowledge, mentor global students, and earn while making an impact.",
    bulletColor: "text-blue-600",
    bullets: [
      "Work from anywhere, anytime",
      "Competitive hourly pay",
      "Free training, resources & support",
      "Influence global IELTS outcomes",
    ],
    button: {
      label: "Apply to Teach",
      href: "/career",
      color: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  },
  {
    id: "investor",
    icon: <DollarSign className="text-yellow-500 w-6 h-6" />,
    title: "For Investors",
    description:
      "Partner with a fast-scaling EdTech brand. Invest in measurable results and global impact.",
    bulletColor: "text-yellow-500",
    bullets: [
      "$5B+ IELTS prep market",
      "10,000+ students trained",
      "80% Band 9 achievement rate",
      "3x ROI with strategic growth",
    ],
    button: {
      label: "Request Investment Proposal",
      href: "#", // You can update this link
      color: "bg-yellow-500 hover:bg-yellow-600 text-white",
    },
  },
];

export const features = [
  {
    title: "Certified Trainers",
    desc: "Get mentored by globally certified IELTS experts with 15+ years of success.",
  },
  {
    title: "Proven Techniques",
    desc: "Our unique strategies are backed by thousands of success stories.",
  },
  {
    title: "AI-Powered Tools",
    desc: "Smart writing feedback, speaking simulators, and real-time practice scoring.",
  },
  {
    title: "Real Mock Tests",
    desc: "Experience real-time, exam-style mock tests to build confidence.",
  },
  {
    title: "Personal Mentorship",
    desc: "Weekly live calls, doubt-solving, and feedback from actual mentors.",
  },
  {
    title: "Flexible Learning",
    desc: "Learn at your own pace, with structured lessons and revision paths.",
  },
];
