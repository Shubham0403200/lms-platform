"use client";
import { Preview } from "@/components/context/preview";
import { Button } from "@/components/ui/button";
import { EyeIcon, HeartIcon, ShareIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { ITempBlog } from "@/data/temp-modal";

interface SingleBlogProps {
  blog: ITempBlog;
  slug: string;
}

const SingleBlog = ({ blog }: SingleBlogProps) => {
  
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(blog.numberOfLikes || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => prev + (isLiked ? -1 : 1));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.description?.slice(0, 100),
          url: window.location.href,
        });
      } catch {
        console.log("Sharing cancelled");
      }
    } else {
      alert("Sharing not supported. Copy this link manually: " + window.location.href);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0 py-8 space-y-6 bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
      {/* Title */}
      <h1 className="text-h1-clamp font-bold text-center leading-tight">{blog.title}</h1>

      {/* Thumbnail and Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-3 relative h-[280px] md:h-[320px] aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={blog.thumbnail?.secure_url || "/default-thumbnail.jpg"}
            alt="Blog thumbnail"
            fill
            className="object-cover"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col h-fit justify-between space-y-4">
          <p className="text-h6-clamp text-muted-foreground text-justify">{blog.description}</p>

          <div className="text-h6-clamp text-slate-800 font-medium">
            ✍️ By <span className="text-slate-950 font-semibold">{blog.writer}</span>
            <br />
            📅{" "}
            <span className="text-muted-foreground font-normal">
              {blog.createdAt && new Date(blog.createdAt).toLocaleDateString("en-GB")}
            </span>
          </div>

          <div className="flex items-center gap-5 text-sm text-slate-600">
            <div
              className="flex items-center gap-2 cursor-pointer transition"
              onClick={handleLike}
            >
              <HeartIcon
                size={20}
                className={isLiked ? "text-red-700 fill-red-700" : "text-red-500"}
              />
              {likesCount} Likes
            </div>

            <div className="flex items-center gap-2">
              <EyeIcon size={20} className="text-blue-500" />
              {blog.numberOfViews} Views
            </div>

            <Button variant="outline" size="sm" onClick={handleShare} className="ml-auto gap-2">
              <ShareIcon size={16} />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Body Content */}
      {blog?.message && (
        <div className="prose prose-slate max-w-none mt-6">
          <Preview value={blog.message} />
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
