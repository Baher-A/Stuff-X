import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Form from "next/form";
import { revalidatePath } from "next/cache";
import { Delete_Request } from "@/Prisma_Db";
import { CircleX } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { AuthSession } from "../../../types/auth";

type Requests_Type = {
  id: number;
  Client_Name: string;
  Client_Email: string;
  Client_Message: string;
};
const ContactRequests = ({ Data }: { Data: Requests_Type[] }) => {
  const Handel_Delete_Request = async (formdata: FormData) => {
    "use server";
    const session = (await auth()) as AuthSession;

    if (session.sessionClaims?.metadata?.role === "admin") {
      const id = Number(formdata.get("id"));
      await Delete_Request(id);
      revalidatePath("/dashboard/clients-requests");
    }
  };

  return Data.length > 0 ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead> id</TableHead>
          <TableHead> Name</TableHead>
          <TableHead> Email</TableHead>
          <TableHead> Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Data.map((Requ, Reqid) => {
          return (
            <TableRow key={Requ.id}>
              <TableCell>{Reqid + 1}</TableCell>
              <TableCell>{Requ.Client_Name}</TableCell>
              <TableCell>{Requ.Client_Email}</TableCell>
              <TableCell className="max-w-37.5 truncate">
                {Requ.Client_Message}
              </TableCell>
              <TableCell>
                <Form
                  action={Handel_Delete_Request}
                  className="flex justify-center items-center"
                >
                  <button
                    type="submit"
                    className="flex items-center justify-center p-2  text-red-600  bg-transparent hover:bg-sidebar-hover  cursor-pointer rounded-lg transition-colors duration-500"
                  >
                    <CircleX className="size-4 stroke-2  " />
                  </button>

                  {/* Input Hidden fo get The Request id That 'll be deleted  */}
                  <input type="hidden" name="id" value={Requ.id} />
                </Form>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <p className="text-center text-primary text-3xl">
      There re no Requests Now
    </p>
  );
};

export default ContactRequests;
