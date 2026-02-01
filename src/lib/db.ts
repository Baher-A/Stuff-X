import { prismaclient } from "./prisma";
import { Blogtype } from "../Data/FakeBlogs";
export async function getAllblogs() {
  return await prismaclient.post.findMany();
}
export async function getLastBlogs(limit = 5) {
  return prismaclient.post.findMany({
    take: limit,
    select: { id: true, title: true, note: true, author: true },
    orderBy: { id: "desc" },
  });
}
export async function getblogs(pagenum: number) {
  const PageSize = 6;
  const skip = (pagenum - 1) * PageSize;
  return await prismaclient.post.findMany({
    skip,
    take: PageSize,
    orderBy: { id: "asc" },
  });
}
export async function getpost(id: number) {
  return await prismaclient.post.findUnique({ where: { id } });
}
export async function Delete_Blog(id: number) {
  return await prismaclient.post.delete({ where: { id } });
}
export async function Create_New_Blog(Blog_Data: Blogtype) {
  console.log(Blog_Data);

  return await prismaclient.post.create({
    data: {
      title: Blog_Data.title,
      note: Blog_Data.note,
      content: Blog_Data.content,
      image: Blog_Data.image,
      readTime: Blog_Data.readTime,
      category: Blog_Data.category,
      date: Blog_Data.date,
      author: Blog_Data.author,
    },
  });
}
export async function Edit_Blog(Blog_id: number, Blog_Data: Blogtype) {
  return await prismaclient.post.update({
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
} // ######################################################################## Requests Part
export async function Get_All_Keep_In_Touch_Requests() {
  return await prismaclient.requestes.findMany();
}
export async function Delete_Request(id: number) {
  return await prismaclient.requestes.delete({ where: { id } });
}
export async function Create_New_Keep_In_Touch_Request(
  Name: string,
  Email: string,
  Message: string,
) {
  return await prismaclient.requestes.create({
    data: { Client_Name: Name, Client_Email: Email, Client_Message: Message },
  });
}
export async function GET_Last_Requests(limit = 5) {
  return await prismaclient.requestes.findMany({
    take: limit,
    select: {
      id: true,
      Client_Name: true,
      Client_Email: true,
      Client_Message: true,
    },
    orderBy: { id: "desc" },
  });
}
