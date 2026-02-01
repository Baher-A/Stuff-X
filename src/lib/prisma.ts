import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Default_Blogs } from "@/Data/FakeBlogs";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
export const prismaclient = new PrismaClient({ adapter });
const seedpost = async () => {
  const count = await prismaclient.post.count();
  if (count === 0) {
    await prismaclient.post.createMany({ data: Default_Blogs });
  }
};
seedpost();
