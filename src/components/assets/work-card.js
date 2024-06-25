export const WorkCard = ({ children, year, title }) => {
  return (
    <div className="h-96 w-48 bg-blue-300">
      <div className="w-full bg-green-200"></div>
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
