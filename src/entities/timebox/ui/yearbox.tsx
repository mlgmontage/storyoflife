import { PropsWithChildren } from "react";

type Props = {
  year: number;
  age: number;
} & PropsWithChildren;

export const YearBox: React.FC<Props> = ({ year, age, children }) => {
  return (
    <div>
      <h3 className="text-gray-200">
        {year} - {age} years{" "}
      </h3>
      {children}
    </div>
  );
};
