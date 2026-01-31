import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Blogtype, Default_Blogs } from "./Data/FakeBlogs";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });

export const Prisma = new PrismaClient({ adapter });

const seedpost = async () => {
  const count = await Prisma.post.count();
  if (count === 0) {
    await Prisma.post.createMany({
      data: Default_Blogs,
    });
  }
};

seedpost();

export async function getblogs(pagenum: number) {
  const PageSize = 6;
  const skip = (pagenum - 1) * PageSize;
  return await Prisma.post.findMany({
    skip,
    take: PageSize,
    orderBy: {
      id: "asc",
    },
  });
}
export async function getAllblogs() {
  return await Prisma.post.findMany();
}
export async function getLastBlogs(limit = 5) {
  return Prisma.post.findMany({
    take: limit,
    select: {
      id: true,
      title: true,
      note: true,
      author: true,
    },
    orderBy: {
      id: "desc",
    },
  });
}
export async function getpost(id: number) {
  return await Prisma.post.findUnique({
    where: { id },
  });
}
export async function Delete_Blog(id: number) {
  return await Prisma.post.delete({
    where: { id },
  });
}
export async function Create_New_Blog(Blog_Data: Blogtype) {
  return await Prisma.post.create({
    data: Blog_Data,
  });
}
export async function Edit_Blog(Blog_id: number, Blog_Data: Blogtype) {
  return await Prisma.post.update({
    where: { id: Blog_id },
    data: {
      title: Blog_Data.title,
      content: Blog_Data.content,
      image: Blog_Data.image,
      category: Blog_Data.category,
      author: Blog_Data.author,
      note: Blog_Data.note,
      date: Blog_Data.date,
      readTime: Blog_Data.readTime,
    },
  });
}

// ######################################################################## Requests Part

export async function Get_All_Keep_In_Touch_Requests() {
  return await Prisma.requestes.findMany();
}

export async function Delete_Request(id: number) {
  return await Prisma.requestes.delete({
    where: { id },
  });
}
export async function Create_New_Keep_In_Touch_Request(
  Name: string,
  Email: string,
  Message: string,
) {
  return await Prisma.requestes.create({
    data: {
      Client_Name: Name,
      Client_Email: Email,
      Client_Message: Message,
    },
  });
}
export async function GET_Last_Requests(limit = 5) {
  return await Prisma.requestes.findMany({
    take: limit,
    select: {
      id: true,
      Client_Name: true,
      Client_Email: true,
      Client_Message: true,
    },
    orderBy: {
      id: "desc",
    },
  });
}
