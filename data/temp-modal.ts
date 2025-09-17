export interface ITempCourse {
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  slug: string;
  difficulty: string;
  courseLength: string;
  chaptersLength?: number; 
}

export interface ITempEvent {
  _id: string;
  name: string;
  description: string;
  slug: string;
  thumbnail: {
    secure_url: string;
  };
  startDate: Date | string;
  startTime: string;
  endDate: Date | string;
  endTime: string;
  location: string;
  price: number;
  mode: string; 
}

export interface ITempBlog {
  _id?: string;
  title: string;
  description: string;
  isPublished: boolean;
  writer: string;
  tags: string[];
  message: string;
  slug: string; 
  thumbnail: {
    secure_url: string;
  };
  numberOfLikes: number;
  likes: String[];
  numberOfViews: number;
  comments: Comment[];
  createdAt?: Date; 
}

export interface TempFeedback {
  _id: string;
  username: string;
  role: string;
  feedback: string;
  stars: number;
  userImage?: string;
  isAccepted: boolean;
  createdAt: Date;
}