import { YearBox } from "entities";
import { Month, MonthGrid, monthNames, range } from "shared";

const Home = () => {
  const birthdayString = "11/15/1997";
  const birthday = new Date(birthdayString);
  const years = range(80, birthday.getFullYear());

  return (
    <div>
      <h1>
        <center>Story of life</center>
      </h1>

      {years.map((year, age) => (
        <YearBox key={age} year={year} age={age}>
          <MonthGrid>
            {range(12).map((month) => (
              <div>
                <small className="text-gray-300">{monthNames[month]}</small>
                <Month>{month}</Month>
              </div>
            ))}
          </MonthGrid>
        </YearBox>
      ))}
    </div>
  );
};

export default Home;
