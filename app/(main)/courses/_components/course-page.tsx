'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { ITempCourse } from "@/data/temp-modal";
import { courseData } from "@/data/temp";

const CoursesPage = () => {
  const [courses, setCourses] = useState<ITempCourse[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("IELTS");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
      try {
        setCourses(courseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = course.category === selectedCategory;
    return searchQuery ? matchSearch : matchCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full max-w-6xl mx-auto p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-h3-clamp font-bold">101 <span className="text-blue-600">Courses</span></h1>
          <p className="text-h6-clamp text-muted-foreground">Explore all IELTS, English, PTE, and other premium courses!</p>
        </div>
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-[400px]"
        />
      </div>

      {/* Tabs */}
      <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
        <TabsList className="w-full overflow-x-auto">
          {["IELTS", "TOEFL", "English", "DET", "PTE", "Others"].map((cat) => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory}>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="p-4 space-y-4">
                    <Skeleton className="w-full h-40 rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[80%]" />
                      <Skeleton className="h-4 w-[50%]" />
                      <Skeleton className="h-4 w-[40%]" />
                    </div>
                  </Card>
                ))
              : paginatedCourses.map((course) => (
                  <Link href={`/courses/${course.slug}`} key={course.slug}>
                    <Card className="hover:shadow-xl transition duration-300 overflow-hidden">
                      <CardHeader className="relative h-[180px]">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover rounded-md"
                        />
                        <div className="absolute -right-4 top-10 bg-destructive text-xs text-white font-semibold rounded-full py-1 px-4">
                          {course.price === 0 ? "Free" : formatPrice(course.price)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-1 mt-2">
                        <CardTitle className="line-clamp-1 text-h5-clamp">{course.title}</CardTitle>
                        <div className="text-h7-clamp text-muted-foreground flex justify-between">
                          <span>{course.category}</span>
                          <span>{course.chaptersLength} Chapters</span>
                        </div>
                        <div className="text-h7-clamp text-muted-foreground flex justify-between">
                          <span>{course.difficulty}</span>
                          <span>{course.courseLength}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
          </div>

          {/* Empty State */}
          {!loading && paginatedCourses.length === 0 && (
            <div className="text-center py-10 space-y-4">
              <Image src="/no-blogs.svg" width={200} height={200} alt="no courses" className="mx-auto" />
              <h4 className="text-h4-clamp font-medium">No Courses Found</h4>
              <p className="text-h6-clamp text-muted-foreground">Try a different search or category.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {!loading && filteredCourses.length > 0 && totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            size="sm"
          >
            Previous
          </Button>
          <p className="text-h6-clamp">Page {currentPage} of {totalPages}</p>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </section>
  );
};

export default CoursesPage;
