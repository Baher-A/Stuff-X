import CreateBlog from "@/components/Design-Blog-Form/CreateBlog";
import { KpiCard } from "@/components/KPI/KpiCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GET_Last_Requests, getLastBlogs } from "@/lib/db";
import { prismaclient } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  FileText,
  GitPullRequestDraft,
  Mails,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { AuthSession } from "../../../types/auth";

const Dash_Board_Home_Page = async () => {
  const session = (await auth()) as AuthSession;

  const [TotalBlo, TotalReq, Last_Req, Last_Blog] = await Promise.all([
    prismaclient.post.count(),
    prismaclient.requestes.count(),
    GET_Last_Requests(),
    getLastBlogs(),
  ]);

  return (
    <div className="space-y-20 mt-10">
      {session.sessionClaims?.metadata?.role !== "admin" ? (
        <p className="text-center text-xl text-red-500">
          Sorry u &apos;re not Admin So All Actions In Dashboard Stopped{" "}
        </p>
      ) : null}
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <KpiCard
          title="Total Blogs"
          value={`${TotalBlo}`}
          icon={<FileText className="h-7 w-7 text-accent-hover " />}
        />

        <KpiCard
          title="Total Requests"
          value={`${TotalReq}`}
          icon={<Mails className="h-7 w-7  text-accent-hover" />}
        />
        <KpiCard
          title="Active Users"
          value={42}
          icon={<ShieldCheck className="text-accent-hover w-7 h-7" />}
        />
        <KpiCard
          title="Last Request"
          value="2h ago"
          icon={<GitPullRequestDraft className="h-7 w-7 text-accent-hover" />}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10   ">
        <div className="space-y-5 ">
          <h1 className="text-2xl "> Last Blogs :</h1>

          <Table className=" xl:w-fit mx-auto  ">
            <TableHeader>
              <TableRow className=" border-accent-foreground text-Text-primary   ">
                <TableHead className="text-center">
                  {" "}
                  <strong>Title</strong>
                </TableHead>
                <TableHead className="text-center">
                  {" "}
                  <strong>Note</strong>
                </TableHead>
                <TableHead className="text-center">
                  {" "}
                  <strong>Author</strong>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Last_Blog.map((Blog) => {
                return (
                  <TableRow
                    key={Blog.id}
                    className="border-accent-foreground  text-Text-secondary text-center  "
                  >
                    <TableCell className="max-w-60  truncate p-5 border-accent-foreground border-r ">
                      {Blog.title}
                    </TableCell>
                    <TableCell className="max-w-60 truncate border-accent-foreground p-5 border-l ">
                      {Blog.note}
                    </TableCell>
                    <TableCell className=" border-accent-foreground p-5 border-l ">
                      {Blog.author}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="justify-between flex xl:pr-15 items-center ">
            <CreateBlog />
            <Link
              href={"/dashboard/blogs"}
              className="text-accent underline underline-offset-3 text-xs w-fit "
            >
              View All Blogs
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl"> Last Requests :</h1>
          <Table className=" xl:w-fit mx-auto">
            <TableHeader>
              <TableRow className=" border-accent-foreground text-Text-primary   ">
                <TableHead className="text-center">
                  {" "}
                  <strong>Email</strong>
                </TableHead>
                <TableHead className="text-center">
                  {" "}
                  <strong>Name</strong>
                </TableHead>
                <TableHead className="text-center">
                  {" "}
                  <strong>Message</strong>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Last_Req.map((Requ) => {
                return (
                  <TableRow
                    key={Requ.id}
                    className="border-accent-foreground  text-Text-secondary text-center  "
                  >
                    <TableCell className="truncate p-5 border-accent-foreground border-r ">
                      {Requ.Client_Email}
                    </TableCell>
                    <TableCell className=" border-accent-foreground p-5 border-l ">
                      {Requ.Client_Name}
                    </TableCell>
                    <TableCell className=" border-accent-foreground p-5 border-l ">
                      {Requ.Client_Message}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className=" flex items-center justify-end p-3  ">
            <Link
              href={"/dashboard/clients-requests"}
              className="text-accent underline underline-offset-3 text-xs w-fit self-end xl:pr-5"
            >
              View All Requests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash_Board_Home_Page;
