import { getblogs, Prisma } from "@/Prisma_Db";
import React from "react";
import Link from "next/link";
import { Blogtype } from "@/Data/FakeBlogs";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Blog_Pagniation from "@/components/Blogs-Pagenations/Blog_Pagniation";

const Blog = async ({ searchParams }: { searchParams: { page?: string } }) => {
  // const pagenum = Number(await searchParams.page) || 1;
  const pagenum = Number((await searchParams).page) || 1;
  const Count = Math.ceil((await Prisma.post.count()) / 6);
  const All_Blogs: Blogtype[] = await getblogs(pagenum);
  return (
    <main className="flex-1 container mx-auto p-7 w-[90%] flex flex-col justify-between">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {All_Blogs.length > 0
          ? All_Blogs.map((blog) => {
              return (
                <Card
                  key={blog.id}
                  className="pt-0 pb-5 relative gap-0 group border-2 border-[#1F2933] shadow-xs shadow-[#111827] rounded-2xl hover:shadow-2xl duration-300 transition-all bg-[#1E1E1A]"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={200}
                    height={200}
                    className="object-cover rounded-xl w-full group-hover:opacity-100 aspect-square  opacity-65 transition-opacity duration-500  "
                  />

                  <CardHeader className="mt-6">
                    <Link
                      className=" text-Text-primary text-md font-bold "
                      href={`/blog/${blog.id}`}
                    >
                      {blog.title}
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-Text-secondary text-sm ">
                      {blog.note}{" "}
                      <Link
                        href={`/blog/${blog.id}`}
                        className="text-accent-hover hover:text-accent transition-colors duration-500"
                      >
                        . . . Read More
                      </Link>
                    </p>
                  </CardContent>
                </Card>
              );
            })
          : notFound()}
      </div>
      <Blog_Pagniation pagenum={pagenum} Count={Count} />
    </main>
  );
};

export default Blog;
