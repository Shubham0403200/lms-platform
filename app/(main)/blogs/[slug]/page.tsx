import { Metadata } from "next";
import Script from "next/script";
import SingleBlog from "../_components/single-blog";
import { blogData } from "@/data/temp";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return { title: "Blog Not Found | IELTS Strategies 101" };

  return {
    title: blog.title,
    description: blog.description?.slice(0, 160),
    keywords: blog.tags?.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.description?.slice(0, 160),
      images: blog.thumbnail?.secure_url ? [blog.thumbnail.secure_url] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blogs/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description?.slice(0, 160),
      images: blog.thumbnail?.secure_url ? [blog.thumbnail.secure_url] : [],
    },
  };
}

export default function Page({ params }: PageProps) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div className="max-w-3xl mx-auto p-6 text-center text-xl font-semibold">Blog not found.</div>;
  }

  const blogUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blogs/${params.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.thumbnail?.secure_url || "",
    author: {
      "@type": "Person",
      name: blog.writer,
    },
    datePublished: blog.createdAt,
    description: blog.description,
    keywords: blog.tags,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "IELTS Strategies 101",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blogs",
        item: `${process.env.NEXT_PUBLIC_APP_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: blog.title,
        item: blogUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="blog-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SingleBlog blog={blog} slug={params.slug} />
    </>
  );
}
