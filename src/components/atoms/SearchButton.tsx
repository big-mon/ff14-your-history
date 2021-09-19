import Link from "next/link";

type Props = {
  text: string;
};

const Calculate = (text: string) => {
  const matched = /[0-9]+/g.exec(text);
  const count = matched?.length ?? 0;
  if (count == 0) return "";

  const result = matched ? matched[count - 1] : "";
  return result;
};

export const SearchButton = (props: Props) => {
  const id = Calculate(props.text);
  const isDisabled = id.length == 0;

  return (
    <Link href={`/character/${id}`}>
      <a>
        <button
          className="bg-gray-800 px-3 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isDisabled}
        >
          GO
        </button>
      </a>
    </Link>
  );
};
