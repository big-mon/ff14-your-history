import { FiUser } from "react-icons/fi";
import { GiMale, GiFemale } from "react-icons/gi";

type Prop = {
  race: string;
  tribe: string;
  gender: number;
};

export const CharacterType = (props: Prop) => {
  return (
    <>
      <p className="mt-8 text-sm flex items-center justify-center lg:justify-start">
        <FiUser color={"rgb(4, 120, 87)"} className="mr-2" />
        {props.race}, {props.tribe}{" "}
        {props.gender == 1 ? <GiMale /> : <GiFemale />}
      </p>
    </>
  );
};
