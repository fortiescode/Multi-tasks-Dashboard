import search from "../assets/icons/search.svg";
function Search() {
  return (
    <div className=" relative mr-4">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md text-lg text-gray2 font-lato font-normal border w-60 h-8 pl-8  pt-1 pb-1.5 bg-gray-300 focus:outline-1 focus:outline-offset-1 focus:outline-primary/60 placeholder:text-sm"
      />
      <img
        src={search}
        alt="search-icon"
        className=" absolute top-[5px] left-1"
      />
    </div>
  );
}

export default Search;
