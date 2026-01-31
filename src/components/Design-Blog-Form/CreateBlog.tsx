import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Blogtype, categories } from "@/Data/FakeBlogs";
import { Create_New_Blog } from "@/Prisma_Db";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import { FilePlus } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { AuthSession } from "../../../types/auth";
const CreateBlog = () => {
  const Handel_Create_Blog = async (formdata: FormData) => {
    "use server";
    const session = (await auth()) as AuthSession;
    if (session.sessionClaims?.metadata?.role === "admin") {
      const Blog_title = formdata.get("BolgTitle") as string;
      const Blog_Description = formdata.get("BlogDescription") as string;
      const Url = formdata.get("ImageUrl") as string;
      const Category_Value = formdata.get("Category") as string;
      const Author_Name = formdata.get("Author_Name") as string;
      const Author_Note = formdata.get("Author_Note") as string;

      const D = new Date();
      D.getDate();
      const Data: Blogtype = {
        title: Blog_title,
        note: Author_Note,
        content: Blog_Description,
        author: Author_Name,
        image: Url,
        category: Category_Value,
        date: `${D.getDate()} - ${D.getMonth() + 1} - ${D.getFullYear()}`,
        readTime: "2 min",
      };
      await Create_New_Blog(Data);
      revalidatePath("/dashboard/blogs");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center px-3 py-2 w-fit self-end  justify-center bg-primary-hover hover:bg-primary  cursor-pointer rounded-md transition-colors duration-500">
          <FilePlus className="size-4 stroke-2 mr-2" />
          <strong className="text-Text-primary   "> Create New Blog</strong>
        </button>
      </DialogTrigger>

      <DialogContent className="w-full lg:max-w-[50%] space-y-2 transition-all duration-500 ">
        {/* Custome Form Here !! */}

        <DialogHeader>
          <DialogTitle className="text-primary font-bold">
            Upated Blog
          </DialogTitle>
          <DialogDescription className="text-Text-secondary">
            Complete All Fields & Click Create when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form action={Handel_Create_Blog} className="flex flex-col gap-10">
          <label htmlFor="BolgTitle" className="flex flex-col space-y-3 ">
            <span>Blog Title :</span>
            <input
              id="BolgTitle"
              type="text"
              required
              placeholder="Enter Blog Title"
              name="BolgTitle"
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
            />
          </label>

          <label htmlFor="BlogDescription" className="flex flex-col space-y-3">
            <span>Blog Descripion :</span>
            <textarea
              id="BlogDescription"
              required
              placeholder="Enter Blog Descritption"
              name="BlogDescription"
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700 min-h-15"
            />
          </label>
          <label htmlFor="ImageUrl" className="flex flex-col space-y-3">
            <span>Image Url :</span>
            <textarea
              id="ImageUrl"
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700 min-h-15"
              required
              placeholder="Enter Image Url"
              name="ImageUrl"
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center ">
            <label htmlFor="Blog_Author" className="flex flex-col space-y-3  ">
              <span>Author Name :</span>
              <input
                id="Blog_Author"
                type="text"
                required
                placeholder="Enter Blog Title"
                name="Author_Name"
                className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
              />
            </label>
            <label htmlFor="Author_Note" className="flex flex-col space-y-3  ">
              <span>Author Note :</span>
              <input
                id="Author_Note"
                type="text"
                required
                placeholder="Enter Author Note"
                name="Author_Note"
                className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
              />
            </label>
          </div>

          <label htmlFor="Category " className="flex flex-col space-y-3">
            <span>Category :</span>

            <select
              name="Category"
              id="Category"
              className="text-Text-primary p-4   bg-[#1a1a1a]  rounded-lg cursor-pointer outline-sidebar-hover my-auto "
            >
              {categories.map((Cat, i) => (
                <option
                  key={i}
                  value={Cat}
                  className="bg-sidebar-hover hover:bg-accent-hover rounded-md  "
                >
                  {Cat}
                </option>
              ))}
            </select>
          </label>

          <DialogClose asChild>
            <button
              type="submit"
              className=" text-Text-primary  px-6 py-3 rounded-md  w-fit cursor-pointer bg-emerald-700 hover:bg-emerald-500 transition-colors duration-500 "
            >
              Create Blog
            </button>
          </DialogClose>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlog;
