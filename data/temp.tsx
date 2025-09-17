export const courseData = [
  {
    title: "IELTS Academic Mastery",
    description: "Comprehensive course covering all IELTS modules with strategies, tips, and practice tests.",
    category: "IELTS",
    price: 199,
    thumbnail: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg",  // IELTS prep materials on a coffee table :contentReference[oaicite:0]{index=0}
    slug: "ielts-academic-mastery",
    difficulty: "Intermediate",
    courseLength: "8 weeks",
    chapterLength: 12, 
  },
  {
    title: "IELTS General Training Success",
    description: "Focused training for IELTS General Training exam with reading, writing, speaking, and listening.",
    category: "IELTS",
    price: 179,
    thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",  // wooden Scrabble tiles “English Test” :contentReference[oaicite:1]{index=1}
    slug: "ielts-general-training-success",
    difficulty: "Intermediate",
    courseLength: "6 weeks",
    chapterLength: 12, 

  },
  {
    title: "IELTS Speaking Confidence",
    description: "Learn how to structure answers, improve fluency, and impress examiners in IELTS Speaking.",
    category: "IELTS",
    price: 129,
    thumbnail: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg",  // desk with study items, books, pen etc. (language education theme) :contentReference[oaicite:2]{index=2}
    slug: "ielts-speaking-confidence",
    difficulty: "Beginner",
    courseLength: "4 weeks",
    chapterLength: 12, 

  },
  {
    title: "IELTS Listening Made Easy",
    description: "Step-by-step guide to cracking IELTS Listening with tips, tricks, and practice exercises.",
    category: "IELTS",
    price: 119,
    thumbnail: "https://images.pexels.com/photos/344102/pexels-photo-344102.jpeg",  // open book and laptop, English learning setting :contentReference[oaicite:3]{index=3}
    slug: "ielts-listening-made-easy",
    difficulty: "Beginner",
    courseLength: "3 weeks",
    chapterLength: 12, 

  },
  {
    title: "Spoken English for Beginners",
    description: "Practical English speaking course for everyday conversations and confidence building.",
    category: "English",
    price: 99,
    thumbnail: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",  // students in class with whiteboard/study setup :contentReference[oaicite:4]{index=4}
    slug: "spoken-english-beginners",
    difficulty: "Beginner",
    courseLength: "4 weeks",
    chapterLength: 12, 

  },
  {
    title: "Business English Essentials",
    description: "Professional communication skills for business meetings, emails, and presentations.",
    category: "English",
    price: 149,
    thumbnail: "https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg",  // person at desk with business-/study vibe :contentReference[oaicite:5]{index=5}
    slug: "business-english-essentials",
    difficulty: "Intermediate",
    courseLength: "5 weeks",
    chapterLength: 12, 

  },
  {
    title: "Fluent English in 30 Days",
    description: "Daily lessons and speaking drills to boost fluency and vocabulary for fast learners.",
    category: "English",
    price: 129,
    thumbnail: "https://images.pexels.com/photos/4145044/pexels-photo-4145044.jpeg",  // overhead view of books, laptop, study setup :contentReference[oaicite:6]{index=6}
    slug: "fluent-english-30-days",
    difficulty: "Intermediate",
    courseLength: "1 month",
    chapterLength: 12, 

  },
  {
    title: "Grammar Essentials",
    description: "A clear and structured course on English grammar rules, examples, and quizzes.",
    category: "Grammar",
    price: 59,
    thumbnail: "https://images.pexels.com/photos/4145189/pexels-photo-4145189.jpeg",  // dictionary page or book close up :contentReference[oaicite:7]{index=7}
    slug: "grammar-essentials",
    difficulty: "Beginner",
    courseLength: "3 weeks",
    chapterLength: 12, 

  },
  {
    title: "Advanced Grammar Masterclass",
    description: "Deep dive into complex grammar structures for advanced learners and IELTS candidates.",
    category: "Grammar",
    price: 99,
    thumbnail: "https://images.pexels.com/photos/3184313/pexels-photo-3184313.jpeg",  // teacher/student at whiteboard teaching grammar concepts :contentReference[oaicite:8]{index=8}
    slug: "advanced-grammar-masterclass",
    difficulty: "Advanced",
    courseLength: "6 weeks",
    chapterLength: 12, 

  },
  {
    title: "Tenses Made Simple",
    description: "Step-by-step guide to mastering all English tenses with examples and practice quizzes.",
    category: "Grammar",
    price: 69,
    thumbnail: "https://images.pexels.com/photos/4145051/pexels-photo-4145051.jpeg",  // books, notebook & pen setup for study mood :contentReference[oaicite:9]{index=9}
    slug: "tenses-made-simple",
    difficulty: "Beginner",
    courseLength: "2 weeks",
    chapterLength: 12, 
  }
];

export const eventData = [
  {
    _id: "1",
    name: "IELTS Writing Task 2 Masterclass",
    description:
      "Learn strategies to write high-scoring essays in IELTS Writing Task 2 with expert tips, examples, and live Q&A.",
    slug: "ielts-writing-task-2-masterclass",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
    startDate: new Date("2025-09-25"),
    startTime: "6:00 PM IST",
    endDate: new Date("2025-09-25"),
    endTime: "8:00 PM IST",
    location: "Zoom Webinar",
    price: 499,
    mode: "online",
  },
  {
    _id: "2",
    name: "English Grammar Bootcamp",
    description:
      "Brush up your grammar basics — tenses, clauses, and sentence structures. Perfect for beginners and IELTS aspirants.",
    slug: "english-grammar-bootcamp",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    },
    startDate: new Date("2025-10-02"),
    startTime: "5:30 PM IST",
    endDate: new Date("2025-10-02"),
    endTime: "7:30 PM IST",
    location: "Google Meet",
    price: 799,
    mode: "online",
  },
  {
    _id: "3",
    name: "Speaking Confidence Workshop",
    description:
      "Overcome hesitation and build fluency in English speaking with roleplays, mock interviews, and live feedback.",
    slug: "speaking-confidence-workshop",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg",
    },
    startDate: new Date("2025-10-10"),
    startTime: "7:00 PM IST",
    endDate: new Date("2025-10-10"),
    endTime: "9:00 PM IST",
    location: "Zoom Webinar",
    price: 599,
    mode: "online",
  },
  {
    _id: "4",
    name: "IELTS Listening Intensive",
    description:
      "Crack IELTS Listening with proven note-taking methods, time management skills, and live practice tests.",
    slug: "ielts-listening-intensive",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    startDate: new Date("2025-10-15"),
    startTime: "4:00 PM IST",
    endDate: new Date("2025-10-15"),
    endTime: "6:00 PM IST",
    location: "Microsoft Teams",
    price: 699,
    mode: "online",
  },
  {
    _id: "5",
    name: "Academic Vocabulary Builder",
    description:
      "Upgrade your vocabulary with academic and formal words used in IELTS Writing & Speaking. Includes quizzes & flashcards.",
    slug: "academic-vocabulary-builder",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
    },
    startDate: new Date("2025-10-22"),
    startTime: "6:30 PM IST",
    endDate: new Date("2025-10-22"),
    endTime: "8:00 PM IST",
    location: "Zoom Webinar",
    price: 499,
    mode: "online",
  },
];

export const blogData = [
  {
    _id: "1",
    title: "Top 10 IELTS Writing Tips",
    description:
      "Boost your IELTS writing score with these practical tips, sample essays, and strategies to impress the examiners.",
    slug: "top-10-ielts-writing-tips",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    writer: "Shubham Awasthi",
    createdAt: new Date("2025-09-10"),
    tags: ["IELTS", "Writing", "Tips"],
    isPublished: true,
    message: `
Learning a second language is more than just memorizing words and grammar rules—it’s a gateway to expanding your horizons, boosting your cognitive abilities, and connecting with people across the world. 

**Cognitive Benefits**  
Research shows that learning a second language enhances brain function. It improves memory, attention, problem-solving skills, and multitasking ability. Bilingual individuals often demonstrate better mental flexibility and a delayed onset of age-related cognitive decline.

**Cultural Awareness**  
Language is a window into culture. When you learn another language, you gain insight into the traditions, values, and perspectives of people from different parts of the world. This cultural awareness fosters empathy and tolerance.

**Career Advantages**  
In the professional world, knowing a second language can set you apart from the competition. Many companies value employees who can communicate in multiple languages. It opens doors to international job opportunities and can even lead to higher salaries.

**Social Connections**  
Learning another language also allows you to form meaningful connections with people from different backgrounds. Traveling becomes more enriching when you can converse with locals and understand cultural nuances.

**Personal Growth**  
Finally, learning a second language teaches patience, resilience, and adaptability. Every new word, phrase, and conversation is a step toward greater confidence and self-expression.

**Conclusion**  
Learning a second language is a multifaceted journey with cognitive, cultural, social, and professional benefits. The skills and experiences gained shape you into a more knowledgeable, empathetic, and connected individual.
  `,
    numberOfLikes: 120,
    likes: ["user1", "user2"],
    comments: [],
    numberOfViews: 450,
  },
  {
    _id: "2",
    title: "IELTS Speaking Band 9 Secrets",
    description:
      "Learn how to speak fluently, use advanced vocabulary, and ace the IELTS Speaking test with Band 9 strategies.",
    slug: "ielts-speaking-band-9-secrets",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
    },
    writer: "Amit Sharma",
    createdAt: new Date("2025-09-15"),
    tags: ["IELTS", "Speaking", "Fluency"],
    isPublished: true,
    message: `
Learning a second language is more than just memorizing words and grammar rules—it’s a gateway to expanding your horizons, boosting your cognitive abilities, and connecting with people across the world. 

**Cognitive Benefits**  
Research shows that learning a second language enhances brain function. It improves memory, attention, problem-solving skills, and multitasking ability. Bilingual individuals often demonstrate better mental flexibility and a delayed onset of age-related cognitive decline.

**Cultural Awareness**  
Language is a window into culture. When you learn another language, you gain insight into the traditions, values, and perspectives of people from different parts of the world. This cultural awareness fosters empathy and tolerance.

**Career Advantages**  
In the professional world, knowing a second language can set you apart from the competition. Many companies value employees who can communicate in multiple languages. It opens doors to international job opportunities and can even lead to higher salaries.

**Social Connections**  
Learning another language also allows you to form meaningful connections with people from different backgrounds. Traveling becomes more enriching when you can converse with locals and understand cultural nuances.

**Personal Growth**  
Finally, learning a second language teaches patience, resilience, and adaptability. Every new word, phrase, and conversation is a step toward greater confidence and self-expression.

**Conclusion**  
Learning a second language is a multifaceted journey with cognitive, cultural, social, and professional benefits. The skills and experiences gained shape you into a more knowledgeable, empathetic, and connected individual.
  `,
    numberOfLikes: 95,
    likes: ["user3"],
    comments: [],
    numberOfViews: 320,
  },
  {
    _id: "3",
    title: "Master IELTS Listening in 7 Days",
    description:
      "Step-by-step techniques, practice exercises, and tips to improve your listening skills and score high in IELTS Listening.",
    slug: "master-ielts-listening-7-days",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
    },
    writer: "Ritika Verma",
    createdAt: new Date("2025-09-20"),
    tags: ["IELTS", "Listening", "Practice"],
    isPublished: true,
    message: `
Learning a second language is more than just memorizing words and grammar rules—it’s a gateway to expanding your horizons, boosting your cognitive abilities, and connecting with people across the world. 

**Cognitive Benefits**  
Research shows that learning a second language enhances brain function. It improves memory, attention, problem-solving skills, and multitasking ability. Bilingual individuals often demonstrate better mental flexibility and a delayed onset of age-related cognitive decline.

**Cultural Awareness**  
Language is a window into culture. When you learn another language, you gain insight into the traditions, values, and perspectives of people from different parts of the world. This cultural awareness fosters empathy and tolerance.

**Career Advantages**  
In the professional world, knowing a second language can set you apart from the competition. Many companies value employees who can communicate in multiple languages. It opens doors to international job opportunities and can even lead to higher salaries.

**Social Connections**  
Learning another language also allows you to form meaningful connections with people from different backgrounds. Traveling becomes more enriching when you can converse with locals and understand cultural nuances.

**Personal Growth**  
Finally, learning a second language teaches patience, resilience, and adaptability. Every new word, phrase, and conversation is a step toward greater confidence and self-expression.

**Conclusion**  
Learning a second language is a multifaceted journey with cognitive, cultural, social, and professional benefits. The skills and experiences gained shape you into a more knowledgeable, empathetic, and connected individual.
  `,
    numberOfLikes: 80,
    likes: ["user4", "user5"],
    comments: [],
    numberOfViews: 290,
  },
  {
    _id: "4",
    title: "Advanced Vocabulary for IELTS Success",
    description:
      "Expand your vocabulary with high-scoring words for IELTS Writing & Speaking, including usage examples and exercises.",
    slug: "advanced-vocabulary-ielts-success",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    },
    writer: "Shubham Awasthi",
    createdAt: new Date("2025-09-22"),
    tags: ["IELTS", "Vocabulary", "Speaking"],
    isPublished: true,
    message: `
Learning a second language is more than just memorizing words and grammar rules—it’s a gateway to expanding your horizons, boosting your cognitive abilities, and connecting with people across the world. 

**Cognitive Benefits**  
Research shows that learning a second language enhances brain function. It improves memory, attention, problem-solving skills, and multitasking ability. Bilingual individuals often demonstrate better mental flexibility and a delayed onset of age-related cognitive decline.

**Cultural Awareness**  
Language is a window into culture. When you learn another language, you gain insight into the traditions, values, and perspectives of people from different parts of the world. This cultural awareness fosters empathy and tolerance.

**Career Advantages**  
In the professional world, knowing a second language can set you apart from the competition. Many companies value employees who can communicate in multiple languages. It opens doors to international job opportunities and can even lead to higher salaries.

**Social Connections**  
Learning another language also allows you to form meaningful connections with people from different backgrounds. Traveling becomes more enriching when you can converse with locals and understand cultural nuances.

**Personal Growth**  
Finally, learning a second language teaches patience, resilience, and adaptability. Every new word, phrase, and conversation is a step toward greater confidence and self-expression.

**Conclusion**  
Learning a second language is a multifaceted journey with cognitive, cultural, social, and professional benefits. The skills and experiences gained shape you into a more knowledgeable, empathetic, and connected individual.
  `,
    numberOfLikes: 110,
    likes: ["user1", "user6"],
    comments: [],
    numberOfViews: 380,
  },
  {
    _id: "5",
    title: "IELTS Reading Strategies You Need",
    description:
      "Learn the best reading strategies, skimming and scanning techniques, and time management tips to ace IELTS Reading.",
    slug: "ielts-reading-strategies",
    thumbnail: {
      secure_url:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
    writer: "Amit Sharma",
    createdAt: new Date("2025-09-25"),
    tags: ["IELTS", "Reading", "Strategies"],
    isPublished: true,
    message: `
Learning a second language is more than just memorizing words and grammar rules—it’s a gateway to expanding your horizons, boosting your cognitive abilities, and connecting with people across the world. 

**Cognitive Benefits**  
Research shows that learning a second language enhances brain function. It improves memory, attention, problem-solving skills, and multitasking ability. Bilingual individuals often demonstrate better mental flexibility and a delayed onset of age-related cognitive decline.

**Cultural Awareness**  
Language is a window into culture. When you learn another language, you gain insight into the traditions, values, and perspectives of people from different parts of the world. This cultural awareness fosters empathy and tolerance.

**Career Advantages**  
In the professional world, knowing a second language can set you apart from the competition. Many companies value employees who can communicate in multiple languages. It opens doors to international job opportunities and can even lead to higher salaries.

**Social Connections**  
Learning another language also allows you to form meaningful connections with people from different backgrounds. Traveling becomes more enriching when you can converse with locals and understand cultural nuances.

**Personal Growth**  
Finally, learning a second language teaches patience, resilience, and adaptability. Every new word, phrase, and conversation is a step toward greater confidence and self-expression.

**Conclusion**  
Learning a second language is a multifaceted journey with cognitive, cultural, social, and professional benefits. The skills and experiences gained shape you into a more knowledgeable, empathetic, and connected individual.
  `,
    numberOfLikes: 70,
    likes: ["user2", "user7"],
    comments: [],
    numberOfViews: 250,
  },
];

export const tempFeedbacks = [
  {
    _id: "1",
    username: "Alice Johnson",
    role: "IELTS Student",
    feedback: "This course helped me improve my writing band score from 6.5 to 8!",
    stars: 5,
    userImage: "https://randomuser.me/api/portraits/women/1.jpg",
    isAccepted: true,
    createdAt: new Date(),
  },
  {
    _id: "2",
    username: "Rahul Sharma",
    role: "English Learner",
    feedback: "The speaking tips are very practical. I feel more confident now.",
    stars: 4,
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    isAccepted: true,
    createdAt: new Date(),
  },
  {
    _id: "3",
    username: "Priya Singh",
    role: "Student",
    feedback: "Amazing content! The exercises really helped me practice efficiently.",
    stars: 5,
    userImage: "https://randomuser.me/api/portraits/women/3.jpg",
    isAccepted: true,
    createdAt: new Date(),
  },
  {
    _id: "4",
    username: "John Doe",
    role: "Professional",
    feedback: "Clear explanations and structured lessons. Highly recommended!",
    stars: 4,
    userImage: "https://randomuser.me/api/portraits/men/4.jpg",
    isAccepted: true,
    createdAt: new Date(),
  },
  {
    _id: "5",
    username: "Sara Khan",
    role: "IELTS Student",
    feedback: "I loved the interactive quizzes. They made learning fun!",
    stars: 5,
    userImage: "https://randomuser.me/api/portraits/women/5.jpg",
    isAccepted: true,
    createdAt: new Date(),
  },
];
