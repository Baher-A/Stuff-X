import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Blog_Pagniation = ({
  pagenum,
  Count,
}: {
  pagenum: number;
  Count: number;
}) => {
  const isFirstPage = pagenum <= 1;
  const isLastPage = pagenum >= Count;
  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          {!isFirstPage && (
            <PaginationItem>
              <PaginationPrevious href={`/blog?page=${pagenum - 1}`} />
            </PaginationItem>
          )}

          {[...Array(Count)].map((v, Index) => {
            return (
              <PaginationItem key={Index}>
                <PaginationLink
                  href={`/blog?page=${Index + 1}`}
                  isActive={pagenum == Index + 1}
                >
                  {Index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {!isLastPage && (
            <PaginationItem>
              <PaginationNext href={`/blog?page=${pagenum + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blog_Pagniation;
