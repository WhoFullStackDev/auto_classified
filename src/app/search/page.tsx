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
    <Container>
      {/* Todo: update Dynamically */}
      <div className="flex items-center gap-1 mt-5">
        <Link
          href="#"
          className="text-text-body text-base font-normal leading-6 self-stretch  cursor-pointer"
        >{`${"Used Cars For Sale"}`}</Link>

        <FiChevronRight size={20} className="text-text-body " />
        <Link
          href="#"
          className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer"
        >
          Listing
        </Link>
      </div>
      <Heading text="Find Used Cars for Sale" className="mt-4" />
      <Filter />
      <Suspense fallback={<p>Loading...</p>}>
        <SearchView />
      </Suspense>
      <Pagination />
    </Container>
  );
};

export default searchResult;
