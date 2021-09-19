import { FiGlobe } from "react-icons/fi";

type Prop = {
  dc: string;
  server: string;
};

export const CharacterServer = (props: Prop) => {
  return (
    <>
      <p className="mt-2 text-base flex items-center justify-center lg:justify-start">
        <FiGlobe color={"rgb(4, 120, 87)"} className="mr-2" />
        {props.dc} ({props.server})
      </p>
    </>
  );
};
