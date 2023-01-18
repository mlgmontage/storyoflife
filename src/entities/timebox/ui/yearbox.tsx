import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const Box = styled.div`
  padding: 0.5rem;
  margin-block: 0.5rem;

  border-top: 1px solid var(--gray-200);
`;

type Props = {
  year: number;
  age: number;
} & PropsWithChildren;

export const YearBox: React.FC<Props> = ({ year, age, children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <h2 className="text-gray-700">
        {year}{" "}
        <small className="text-gray-400">
          {age} years {currentYear === year && "(current)"}
        </small>{" "}
      </h2>
      {children}
    </Box>
  );
};
