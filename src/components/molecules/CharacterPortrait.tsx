import Image from "next/image";

type Prop = {
  src: string;
  alt: string;
};

export const CharacterPortrait = (props: Prop) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={640}
      height={873}
      quality={60}
    />
  );
};
