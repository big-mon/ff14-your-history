import { SearchInput } from "../atoms/SearchInput";
import { SearchButton } from "../atoms/SearchButton";

export const Search = () => {
  return (
    <>
      <div className="flex flex-wrap items-stretch border border-gray-400">
        <SearchInput />
        <SearchButton />
      </div>
    </>
  );
};
