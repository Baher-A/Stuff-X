import CreateBlog from "@/components/Design-Blog-Form/CreateBlog";
import Edit_Form_Blog from "@/components/Design-Blog-Form/Edit_Form_Blog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Blogtype } from "@/Data/FakeBlogs";
import { Delete_Blog, getAllblogs } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { XIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import React from "react";
import { AuthSession } from "../../../../types/auth";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs",
  description: "Manage website Blogs",
};
const Blogs = async () => {
  const Data: Blogtype[] = await getAllblogs();
  const Handel_Delete_Request = async (formdata: FormData) => {
    "use server";
    const session = (await auth()) as AuthSession;
    if (session.sessionClaims?.metadata?.role === "admin") {
      const id = Number(formdata.get("id") as string);
      await Delete_Blog(id);
      revalidatePath("/dashboard/blogs");
    }
  };

  return !Blogs ? (
    <p>Blogs Not Found</p>
  ) : (
    <main className=" flex flex-col gap-7 w-full ">
      <CreateBlog />
      <Table className="text-Text-primary ">
        <TableHeader>
          <TableRow className="space-x-5 border-Text-secondary   ">
            <TableHead>
              {" "}
              <strong>id</strong>
            </TableHead>
            <TableHead>
              {" "}
              <strong>Name</strong>
            </TableHead>
            <TableHead>
              {" "}
              <strong>Note</strong>
            </TableHead>
            <TableHead className="text-center">
              {" "}
              <strong>Author</strong>
            </TableHead>
            <TableHead className="text-center">
              {" "}
              <strong>- Operations - </strong>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((Blog, Blogid) => {
            return (
              <TableRow
                key={Blog.id}
                className="border-accent-foreground text-Text-secondary  "
              >
                <TableCell className="p-0">{Blogid + 1}</TableCell>
                <TableCell className="max-w-37.5 truncate border-accent-foreground border-l ">
                  {Blog.title}
                </TableCell>
                <TableCell className="max-w-37.5 truncate border-accent-foreground border-l ">
                  {Blog.note}
                </TableCell>
                <TableCell className="text-center border-accent-foreground border-l  ">
                  {Blog.author}
                </TableCell>
                <TableCell className="flex justify-evenly  items-center border-accent-foreground border-l ">
                  <Edit_Form_Blog BlogDetails={Blog} />
                  <Form
                    action={Handel_Delete_Request}
                    className="flex justify-center items-center"
                  >
                    <button
                      type="submit"
                      className="flex items-center justify-center p-2  text-red-600  bg-transparent hover:bg-sidebar-hover  cursor-pointer rounded-lg transition-colors duration-500"
                    >
                      <XIcon className="size-5 stroke-2  " />
                    </button>
                    <input type="hidden" name="id" value={Blog.id} />
                  </Form>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
};

export default Blogs;
