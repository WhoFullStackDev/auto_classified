import Card from "../ui/Card";

const SearchView = () => {
  return (
    <div className="grid grid-cols-4 justify-center gap-5">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((num) => (
        <Card key={num} />
      ))}
    </div>
  );
};

export default SearchView;
