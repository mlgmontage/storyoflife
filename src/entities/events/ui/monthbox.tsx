import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Month } from "shared";
import { useEvents } from "../model/events";

type Props = {
  year: number;
  month: number;
};

const Event = styled(Link)`
  display: block;
  padding: 0.2rem;

  text-decoration: none;
  color: var(--gray-700);
  border-bottom: 1px solid var(--gray-200);
`;

export const MonthBox: React.FC<Props> = ({ month, year }) => {
  const events = useEvents(year, month);

  const diff =
    new Date().getTime() - new Date(`${month + 1}/1/${year}`).getTime();

  const monthType = diff > 0 ? "past" : "future";

  return (
    <>
      <Month type={monthType}>
        {events.map((ev, i) => (
          <Event to="/" key={i}>
            {ev.title.slice(0, 15)}
          </Event>
        ))}
      </Month>
      {monthType === "past" && (
        <Link
          className="no-decoration text-gray-300"
          to={`/create/${year}/${month}`}
        >
          +
        </Link>
      )}
    </>
  );
};
