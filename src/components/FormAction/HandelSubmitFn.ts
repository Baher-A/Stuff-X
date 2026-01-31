"use server";

import { Create_New_Keep_In_Touch_Request } from "@/Prisma_Db";

export const HandelsubmitFun = async (
  prev: { success: boolean },
  data: FormData,
) => {
  const Name = data.get("Name") as string;
  const Email = data.get("Email") as string;
  const Message = data.get("Message") as string;
  Create_New_Keep_In_Touch_Request(Name, Email, Message);
  return { success: true };
};
