import React, { Suspense } from "react";
import { getblogs } from "@/lib/db";
import Blog_Pagniation from "@/components/Blogs-Pagenations/Blog_Pagniation";
import type { Metadata } from "next";
import { prismaclient } from "@/lib/prisma";
import Blog_Content from "@/components/Bog-Content/Blog_Content";
export const metadata: Metadata = {
  title: "Bolgs",
  description: "Show Our Variant Blogs",
};
const Blog = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const pagenum = Number((await searchParams).page) || 1;
  const [Blogs_lengh, All_Blogs] = await Promise.all([
    prismaclient.post.count(),
    getblogs(pagenum),
  ]);
  const Count = Math.ceil(Blogs_lengh / 6);
  return (
    <main className="flex-1 container mx-auto p-7 w-[90%] flex flex-col justify-between">
      <Suspense fallback={<div>Loading...</div>}>
        <Blog_Content All_Blogs={All_Blogs} />
      </Suspense>
      <Blog_Pagniation pagenum={pagenum} Count={Count} />
    </main>
  );
};

export default Blog;
