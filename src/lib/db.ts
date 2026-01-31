import { prisma } from "./prisma";
import { Blogtype } from "../Data/FakeBlogs";

export async function getblogs(pagenum: number) {
  const PageSize = 6;
  const skip = (pagenum - 1) * PageSize;

  return prisma.post.findMany({
    skip,
    take: PageSize,
    orderBy: { id: "asc" },
  });
}

export async function getAllblogs() {
  return prisma.post.findMany();
}

export async function getLastBlogs(limit = 5) {
  return prisma.post.findMany({
    take: limit,
    orderBy: { id: "desc" },
    select: {
      id: true,
      title: true,
      note: true,
      author: true,
    },
  });
}

export async function getpost(id: number) {
  return prisma.post.findUnique({
    where: { id },
  });
}

export async function Delete_Blog(id: number) {
  return prisma.post.delete({
    where: { id },
  });
}

export async function Create_New_Blog(data: Blogtype) {
  return prisma.post.create({ data });
}

export async function Edit_Blog(id: number, data: Blogtype) {
  return prisma.post.update({
    where: { id },
    data,
  });
}

// Requests
export async function Get_All_Keep_In_Touch_Requests() {
  return prisma.requestes.findMany();
}

export async function Delete_Request(id: number) {
  return prisma.requestes.delete({ where: { id } });
}

export async function Create_New_Keep_In_Touch_Request(
  Name: string,
  Email: string,
  Message: string,
) {
  return prisma.requestes.create({
    data: {
      Client_Name: Name,
      Client_Email: Email,
      Client_Message: Message,
    },
  });
}
