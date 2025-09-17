import { notFound } from "next/navigation";
import { Metadata } from "next";
import { courseData } from "@/data/temp"; 
import SingleCourse from "../_components/single-course";

interface PageProps {
  params: { slug: string };
}

// ----------- Fetch course from temp data -----------
async function fetchCourse(slug: string) {
  const course = courseData.find((c) => c.slug === slug);
  return course ? { course } : null;
}

// ----------- SEO Metadata -----------
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const course = courseData.find((c) => c.slug === params.slug);

  if (!course) {
    return { title: "Course Not Found | IELTS Strategies 101" };
  }

  return {
    title: course.title,
    description: course.description?.slice(0, 160),
    keywords: course.category,
    openGraph: {
      title: course.title,
      description: course.description?.slice(0, 160),
      images: [course.thumbnail],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description?.slice(0, 160),
      images: [course.thumbnail],
    },
  };
}

// ----------- Page Component -----------
export default async function Page({ params }: PageProps) {
  const data = await fetchCourse(params.slug);

  if (!data || !data.course) {
    notFound();
  }

  return <SingleCourse course={data.course} />;
}
