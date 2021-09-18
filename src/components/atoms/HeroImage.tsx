import Image from "next/image";
import bg from "../../../public/bg.jpg";

export const HeroImage = () => {
  return (
    <Image
      src={bg}
      alt={"Image of Final Fantasy 14"}
      layout={"fill"}
      objectFit={"cover"}
      quality={40}
    />
  );
};
