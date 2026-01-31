import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Edit } from "lucide-react";
import { Blogtype, categories } from "@/Data/FakeBlogs";
import { HandelUpdateButton } from "@/Data/FuncTions";

const Create_Edit_Blog = ({ BlogDetails }: { BlogDetails: Blogtype }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center p-2  text-accent  bg-transparent hover:bg-sidebar-hover  cursor-pointer rounded-lg transition-colors duration-500">
          <Edit className="size-5 stroke-2" />
        </button>
      </DialogTrigger>

      <DialogContent className="w-full lg:max-w-[60%] space-y-2 transition-all duration-500 ">
        {/* Custome Form Here !! */}
        <DialogHeader>
          <DialogTitle className="text-primary font-bold">
            Upated Blog
          </DialogTitle>
          <DialogDescription className="text-Text-secondary">
            Make changes to Blog here & Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form action={HandelUpdateButton} className="flex flex-col gap-10">
          <label className="flex flex-col space-y-3 ">
            <span>Blog Title :</span>
            <input
              type="text"
              required
              placeholder="Enter Blog Title"
              name="BolgTitle"
              defaultValue={BlogDetails.title}
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
            />
          </label>

          <label className="flex flex-col space-y-3">
            <span>Blog Descripion :</span>
            <textarea
              required
              placeholder="Enter Blog Descritption"
              name="Blog_Des"
              defaultValue={BlogDetails.content}
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700 min-h-15"
            />
          </label>
          <label className="flex flex-col space-y-3">
            <span>Image Url :</span>
            <textarea
              className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700 min-h-15"
              required
              placeholder="Enter Image Url"
              name="ImageUrl"
              defaultValue={BlogDetails.image}
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center ">
            <label className="flex flex-col space-y-3  ">
              <span>Author Name :</span>
              <input
                type="text"
                required
                placeholder="Enter Blog Title"
                name="Author_Name"
                className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
                defaultValue={BlogDetails.author}
              />
            </label>
            <label className="flex flex-col space-y-3  ">
              <span>Author Note :</span>
              <input
                type="text"
                required
                placeholder="Enter Author Note"
                name="Author_Note"
                className="p-4 outline-1 outline-sidebar-hover rounded-lg focus:outline-[#53c28b] transition-all duration-700"
                defaultValue={BlogDetails.note}
              />
            </label>
          </div>

          <label className="flex flex-col space-y-3">
            <span>Category :</span>

            <select
              name="Category"
              className="text-Text-primary p-4   bg-[#1a1a1a]  rounded-lg cursor-pointer outline-sidebar-hover my-auto "
              defaultValue={BlogDetails.category}
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

          {/* <DialogFooter> */}
          <button
            type="submit"
            className=" text-[#EEE]  px-6 py-3 rounded-md w-1/2 lg:w-1/5 cursor-pointer bg-emerald-700 hover:bg-emerald-500 transition-colors duration-500 "
          >
            Update
          </button>
          <input type="hidden" value={BlogDetails.id} name="Blog_Id" />
          {/* </DialogFooter> */}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Create_Edit_Blog;
