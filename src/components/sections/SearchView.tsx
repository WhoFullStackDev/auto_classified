import Card from "../ui/Card";

const SearchView = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center justify-center items-center w-full mx-auto gap-5 max-lg:max-w-screen-lg ">
      {[...Array(20)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default SearchView;
