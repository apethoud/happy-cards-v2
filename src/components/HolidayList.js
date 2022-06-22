import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayList() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  const [holidayList, setHolidayList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getHolidays() {
      setIsLoading(true);
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
      setIsLoading(false);
    }
    getHolidays();
  }, [selectedTimeframe]);

  return (
    <>
      <div className="Flex">
        <button
          className={`FilterButton ${
            selectedTimeframe === "month" ? "SelectedFilterButton" : ""
          }`}
          onClick={() => setSelectedTimeframe("month")}
        >
          This Month
        </button>
        <button
          className={`FilterButton ${
            selectedTimeframe === "year" ? "SelectedFilterButton" : ""
          }`}
          onClick={() => setSelectedTimeframe("year")}
        >
          This Year
        </button>
      </div>
      <div style={{ margin: 10 }}>
        <div>
          {isLoading ? (
            <div className="FullWidthCenteringContainer">
              <FontAwesomeIcon spin icon={faCircleNotch} size="3x" />
            </div>
          ) : holidayList.length > 0 ? (
            holidayList.map((holiday, index) => (
              <div key={index} className="HolidayRow">
                {holiday.date}: {holiday.name}
              </div>
            ))
          ) : (
            <div className="FullWidthCenteringContainer">
              <div>No holidays found.</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
