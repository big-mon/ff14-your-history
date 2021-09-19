import { HeroSiteTitle } from "../molecules/HeroSiteTitle";
import { Search } from "../molecules/Search";
import { HeroImage } from "../atoms/HeroImage";

export const Hero = () => {
  return (
    <>
      <main className="h-screen max-h-full flex items-center">
        <div className="w-full md:w-1/2 text-center">
          <div className="mx-auto px-6 w-full">
            <HeroSiteTitle />

            <div className="mx-auto mt-12 px-6 max-w-2xl">
              <Search />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-full relative">
          <HeroImage />
        </div>
      </main>
    </>
  );
};
