import { FiHome } from "react-icons/fi";

type Prop = {
  fc?: string;
  fcId?: string;
};

export const CharacterFreeCompany = (props: Prop) => {
  return (
    <>
      {props.fcId ? (
        <p className="mt-2 text-base flex items-center justify-center lg:justify-start">
          <FiHome color={"rgb(4, 120, 87)"} className="mr-2" />
          <a
            href={`https://jp.finalfantasyxiv.com/lodestone/freecompany/${props.fcId}`}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.fc}
          </a>
        </p>
      ) : (
        <></>
      )}
    </>
  );
};
