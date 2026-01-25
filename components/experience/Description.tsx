export type DescriptionEntry = {
  descriptionList: string[];
};

const Description = ({ descriptionList }: DescriptionEntry) => {
  return (
    <ul className="flex list-disc flex-col gap-4 text-lg">
      {descriptionList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Description;
