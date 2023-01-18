import { YearBox, MonthBox } from "entities";
import { Outlet } from "react-router-dom";
import { MonthGrid, monthNames, range } from "shared";

const Home = () => {
  const birthdayString = "11/15/1997";
  const birthday = new Date(birthdayString);
  const years = range(80, birthday.getFullYear());

  return (
    <div className="container">
      <center>
        <h1 className="underline">Story of life</h1>
      </center>

      {years.map((year, age) => (
        <YearBox key={age} year={year} age={age}>
          <MonthGrid>
            {range(12).map((month) => (
              <div key={month}>
                <small className="text-gray-300">{monthNames[month]}</small>
                <MonthBox year={year} month={month} />
              </div>
            ))}
          </MonthGrid>
        </YearBox>
      ))}

      <Outlet />
    </div>
  );
};

export default Home;
