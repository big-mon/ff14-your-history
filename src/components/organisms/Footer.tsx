import { AuthorLink } from "../atoms/AuthorLink";
import { CopyrightSQEX } from "../atoms/CopyrightSQEX";

type Prop = {
  isSticky: boolean;
};

export const Footer = (props: Prop) => {
  return (
    <>
      {props.isSticky ? (
        <div className="px-3 py-2 w-full fixed bottom-0 font-serif text-sm text-gray-400">
          <span className="px-2 backdrop-blur">
            Created by <AuthorLink />.
          </span>
          <br />
          <CopyrightSQEX />
        </div>
      ) : (
        <div className="px-3 py-2 w-full bottom-0 font-serif text-sm text-gray-400">
          <span className="px-2 backdrop-blur">
            Created by <AuthorLink />.
          </span>
          <br />
          <CopyrightSQEX />
        </div>
      )}
    </>
  );
};
