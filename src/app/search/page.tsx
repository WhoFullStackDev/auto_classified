import Filter from "@/components/sections/Filter";
import Pagination from "@/components/sections/Pagination";
import SearchView from "@/components/sections/SearchView";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { Suspense } from "react";
import { FiChevronRight } from "react-icons/fi";

const searchResult = () => {
  return (
    <Container className="relative">
      {/* Todo: update Dynamically */}
      <div className="flex items-center gap-1 mt-5 max-md:hidden">
        <Link
          href="#"
          className="text-text-body text-base font-normal leading-6 self-stretch  cursor-pointer underline hover:text-text-hover focus:text-text-hover"
        >{`${"Used Cars For Sale"}`}</Link>

        <FiChevronRight size={20} className="text-text-body " />
        <Link
          href="#"
          className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer underline hover:text-text-hover focus:text-text-hover"
        >
          Listing
        </Link>
      </div>

      <p className="text-base font-normal leading-5 text-text-body py-2 md:hidden">
        Used Car for Sale <span className="underline">Notion Wide</span>
      </p>

      <Heading text="Find Used Cars for Sale" className="mt-4 max-md:hidden" />
      <Filter />

      <Suspense fallback={<p>Loading...</p>}>
        <SearchView />
      </Suspense>
      <Pagination />
    </Container>
  );
};

export default searchResult;
