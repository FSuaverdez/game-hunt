"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "use-debounce";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  query: string;
}

const SearchInput = ({ query }: SearchInputProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);
  const [value] = useDebounce(searchTerm, 400);

  useEffect(() => {
    router.push(`/search?q=${value}`);
  }, [value, router]);

  return (
    <div className="max-w-2xl mx-auto mt-5 relative">
      <SearchIcon className="absolute left-2 top-3 h-6 w-6 text-primary font-bold" />
      <Input
        placeholder="Search a game"
        className="pl-10 py-6 text-lg"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
