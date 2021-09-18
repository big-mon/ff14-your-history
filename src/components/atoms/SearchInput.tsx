type Props = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: Props) => {
  return (
    <input
      type="text"
      className="flex-grow text-gray-800 bg-gray-200 px-3 py-2 text-base focus:outline-none"
      placeholder={"https://jp.finalfantasyxiv.com/lodestone/character/XXXXX"}
      value={props.id}
      onChange={(e) => props.onChange(e)}
    />
  );
};
