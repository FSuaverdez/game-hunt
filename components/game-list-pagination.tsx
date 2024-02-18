"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GameListPaginationProps {
  page: number;
  hasNext: string;
  hasPrevious: string;
  href: string;
  className?: string;
}

const GameListPagination = ({
  page,
  hasNext,
  hasPrevious,
  href,
  className,
}: GameListPaginationProps) => {
  const nextPage = page + 1;
  const prevPage = page > 1 ? page - 1 : page;

  return (
    <Pagination className={cn("text-primary flex", className)}>
      <PaginationContent>
        {hasPrevious && (
          <PaginationItem>
            <PaginationPrevious
              href={`${href}?page=${prevPage}`}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
        {hasNext && (
          <PaginationItem>
            <PaginationNext
              href={`${href}?page=${nextPage}`}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default GameListPagination;
