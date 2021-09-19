import Image from "next/image";

type Prop = {
  src: string;
  alt: string;
};

export const CharacterAvatar = (props: Prop) => {
  return (
    <div className="block lg:hidden mx-auto -mt-14">
      <Image
        src={props.src}
        alt={props.alt}
        className="rounded-full"
        width={96}
        height={96}
        quality={60}
      />
    </div>
  );
};
