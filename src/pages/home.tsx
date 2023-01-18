import { YearBox } from "entities";
import { range } from "shared";

const Home = () => {
  const birthdayString = "11/15/1997";
  const birthday = new Date(birthdayString);
  const years = range(100, birthday.getFullYear());

  return (
    <div>
      <h1>
        <center>Story of life</center>
      </h1>
      {years.map((year, age) => (
        <YearBox key={age} year={year} age={age} />
      ))}
    </div>
  );
};

export default Home;
