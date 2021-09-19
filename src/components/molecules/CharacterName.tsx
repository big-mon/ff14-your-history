type Prop = {
  name: string;
};

export const CharacterName = (props: Prop) => {
  return (
    <>
      <h2 className="text-3xl font-bold pt-8 lg:pt-0">{props.name}</h2>
      <div className="mx-auto lg:mx-0 w-5/6 pt-3 border-b-2 border-green-700 opacity-25"></div>
    </>
  );
};
