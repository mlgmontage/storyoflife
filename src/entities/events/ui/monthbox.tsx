import { Link } from "react-router-dom";
import { Month } from "shared";

type Props = {
  year: number;
  month: number;
};

export const MonthBox: React.FC<Props> = ({ month, year }) => {
  const diff =
    new Date().getTime() - new Date(`${month + 1}/1/${year}`).getTime();

  const monthType = diff > 0 ? "past" : "future";

  return (
    <>
      <Month type={monthType}></Month>
      {monthType === "past" && <Link to={`/create/${year}/${month}`}>+</Link>}
    </>
  );
};
