import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayList() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      let params;
      if (selectedTimeframe === "year") {
        params = "&year=2022";
      } else if (selectedTimeframe === "month") {
        params = "&year=2022&month=7";
      }
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US${params}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedTimeframe]);

  return (
    <>
      <div className="Flex">
        <button
          className={`FilterButton ${
            selectedTimeframe === "month" ? "SelectedButton" : ""
          }`}
          onClick={() => setSelectedTimeframe("month")}
        >
          This Month
        </button>
        <button
          className={`FilterButton ${
            selectedTimeframe === "year" ? "SelectedButton" : ""
          }`}
          onClick={() => setSelectedTimeframe("year")}
        >
          This Year
        </button>
      </div>
      <div>
        {holidayList.length > 0 &&
          holidayList.map((holiday, index) => (
            <div key={index} className="HolidayRow">
              {holiday.date}: {holiday.name}
            </div>
          ))}
      </div>
    </>
  );
}
