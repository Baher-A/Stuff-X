"use server";
import { Blogtype } from "./FakeBlogs";
import { Edit_Blog } from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { AuthSession } from "../../types/auth";
export const HandelUpdateButton = async (formdata: FormData) => {
  const session = (await auth()) as AuthSession;

  if (session.sessionClaims?.metadata?.role === "admin") {
    const Blog_title = formdata.get("BolgTitle") as string;
    const Blog_Description = formdata.get("Blog_Des") as string;
    const Url = formdata.get("ImageUrl") as string;
    const Category_Value = formdata.get("Category") as string;
    const Author_Name = formdata.get("Author_Name") as string;
    const Author_Note = formdata.get("Author_Note") as string;
    const Blog_Id = Number(formdata.get("Blog_Id") as string);
    const Data: Blogtype = {
      title: Blog_title,
      note: Author_Note,
      content: Blog_Description,
      author: Author_Name,
      image: Url,
      category: Category_Value,
      date: new Date().toISOString(),
      readTime: "2 min",
    };
    if (!Blog_Id) {
      throw new Error("Invalid Blog ID");
    }
    await Edit_Blog(Blog_Id, Data);
    redirect("/dashboard/blogs");
  }
};
