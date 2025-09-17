import { z } from 'zod';

export const TitleSchema = z.object({
  title: z.string().min(1, 'Title must not be empty'),
});

export const tagsSchema = z.object({
  tags: z
    .array(z.string().min(1, { message: "Please enter a valid tag." }))
    .default([]),
});

export const LengthSchema = z.object({
  courseLength: z.string().min(1, 'Course Length must not be empty'),
});

export const DescriptionSchema = z.object({
  description: z.string().min(1, "Description must not be empty"),
});

export const CategorySchema = z.object({
  category: z.string().min(1, "Please select a category first!"),
});

export const PriceSchema = z.object({
  price: z.coerce.number(),
});

export const DifficultySchema = z.object({
  difficulty: z.string().min(1, "Please Select a Difficulty first!"),
});

export const ThumbnailSchema = z.object({
  thumbnail: z.object({
    public_id: z.string().optional(),
    secure_url: z.string().optional(),
  }),
});

export const ResourcesSchema = z.object({
  resources: z
    .array(z.string().url({ message: "Please enter a valid URL." }))
    .optional()
    .default([]),
});

export const detailsSchema = z.object({
  details: z
    .array(z.string().min(1, { message: "Please enter a valid course detail." }))
    .optional()
    .default([]),
});


export const ChaptersTitleSchema = z.object({
  chapters: z.array(z.object({
    chapterTitle: z.string().min(1, "Chapter title cannot be empty"),
    position: z.number().default(1),
  })),
});

export const ChapterTitleSchema = z.object({
    chapterTitle: z.string().min(1, "Chapter title cannot be empty"),
});

export const ChapterDescriptionSchema = z.object({
  description: z.string().min(1, "Chapter Description cannot be empty"),
});

export const ChapterIsFreeSchema = z.object({
  isFree: z.boolean().optional().default(false),
});

export const VideoSchema = z.object({
  video: z.object({
    public_id: z.string().optional(),
    secure_url: z.string().optional(),
    youtube_link: z.string().optional(),
  }),
});

export const ChapterResourcesSchema = z.object({
  chapterResources: z
    .array(z.string().url({ message: "Please enter a valid URL." }))
    .optional()
    .default([]),
});

export const ChapterQuizSchema = z.object({
  chapterQuiz: z.array(z.object({
      question: z.string().min(1, ' Please add the question first!'), 
      questionType: z.enum(['radio', 'checkbox', 'text'], { required_error: "You need to select a question type!" }), 
      options:  z.array(z.string()).default([]), 
      answer:  z.array(z.string()).default([]), 
  }))
})