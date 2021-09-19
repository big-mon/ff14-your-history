import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { CharacterData } from "../organisms/CharacterData";

export const Template = () => {
  return (
    <>
      <Header />
      <CharacterData />
      <Footer isSticky={false} />
    </>
  );
};
