import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Default_Blogs } from "@/Data/FakeBlogs";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
const seedpost = async () => {
  const count = await prisma.post.count();
  if (count === 0) {
    await prisma.post.createMany({ data: Default_Blogs });
  }
};
seedpost();
