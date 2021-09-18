import { SearchInput } from "../atoms/SearchInput";
import { SearchButton } from "../atoms/SearchButton";
import { useState } from "react";

export const Search = () => {
  const [characterID, setCharacterID] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    setCharacterID(id);
  };

  return (
    <>
      <div className="flex flex-wrap items-stretch border border-gray-400">
        <SearchInput id={characterID} onChange={(e) => handleChange(e)} />
        <SearchButton id={characterID} />
      </div>
    </>
  );
};
