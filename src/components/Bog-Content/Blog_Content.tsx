import { Blogtype } from "@/Data/FakeBlogs";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ServerOff } from "lucide-react";
const Blog_Content = ({ All_Blogs }: { All_Blogs: Blogtype[] }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {All_Blogs ? (
        All_Blogs.map((blog) => {
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
                className="object-fill rounded-xl w-full group-hover:opacity-100 aspect-square  opacity-65 transition-opacity duration-500  "
              />

              <CardHeader className="mt-6">
                <Link
                  className=" text-Text-primary text-md font-bold focus:outline-hidden focus:text-accent-hover transition-colors"
                  href={`/blog/${blog.id}`}
                  aria-label={blog.title}
                >
                  {blog.title}
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-Text-secondary text-sm ">
                  {blog.note}{" "}
                  <Link
                    href={`/blog/${blog.id}`}
                    aria-label={blog.title}
                    className="text-accent-hover hover:text-accent transition-colors duration-500 focus:outline-hidden focus:text-accent"
                  >
                    . . . Read More
                  </Link>
                </p>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <h1 className="text-5xl text-accent-hover inline-flex items-center gap-5   self-center ">
          <strong className=" text-primary">
            <ServerOff className="size-8 stroke-2" />
          </strong>
          There &apos;s no Blogs To Show Right Now !{" "}
        </h1>
      )}
    </div>
  );
};

export default Blog_Content;
