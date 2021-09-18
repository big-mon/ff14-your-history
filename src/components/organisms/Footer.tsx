import { AuthorLink } from "../atoms/AuthorLink";
import { CopyrightSQEX } from "../atoms/CopyrightSQEX";

export const Footer = () => {
  return (
    <div className="px-3 py-2 w-full fixed bottom-0 font-serif text-sm text-gray-400">
      <div>
        <span className="px-2 backdrop-blur">
          Created by <AuthorLink />.
        </span>
        <br />
        <CopyrightSQEX />
      </div>
    </div>
  );
};
