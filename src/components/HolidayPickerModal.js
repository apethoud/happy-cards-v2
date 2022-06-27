import { useEffect, useState } from "react";
import {
  Input,
  ModalCloseButtonWrapper,
  ModalTableRow,
  ModalTitle,
  ModalTitleBar,
  TableFilterButton,
} from "./StyledComponents";
import ReactModal from "react-modal";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

const modalStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    width: 800,
    height: 600,
    inset: 0,
    padding: 0,
  },
};

export default function HolidayPickerModal({
  isModalOpen,
  setIsModalOpen,
  setSelectedHolidayName,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("this_month");
  const [holidayList, setHolidayList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getHolidays() {
      setIsLoading(true);
      let params;
      if (selectedTimeframe === "this_year") {
        params = "year=2022";
      } else {
        params = "year=2022&month=7";
      }
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&${params}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
      setIsLoading(false);
    }
    getHolidays();
  }, [selectedTimeframe]);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  function handleSelect(selectedHolidayName) {
    setSelectedHolidayName(selectedHolidayName);
    handleCloseModal();
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSearchTerm("");
  }

  function getFilteredHolidayList() {
    return _.filter(holidayList, (holiday) => {
      return holiday.name.includes(searchTerm);
    });
  }

  return (
    <ReactModal isOpen={isModalOpen} style={modalStyles}>
      <ModalTitleBar>
        <ModalTitle>Pick a Holiday</ModalTitle>
        <ModalCloseButtonWrapper onClick={() => handleCloseModal()}>
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </ModalCloseButtonWrapper>
      </ModalTitleBar>
      <div className="Modal-Section" style={{ display: "flex", padding: 16 }}>
        <Input
          name="search"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ marginRight: 16 }}
          placeholder="Search..."
        />
        <TableFilterButton
          selected={selectedTimeframe === "this_month"}
          onClick={() => setSelectedTimeframe("this_month")}
        >
          This Month
        </TableFilterButton>
        <TableFilterButton
          selected={selectedTimeframe === "this_year"}
          onClick={() => setSelectedTimeframe("this_year")}
        >
          This Year
        </TableFilterButton>
        <div style={{ padding: 8, fontStyle: "italic" }}>
          ({getFilteredHolidayList().length} options)
        </div>
      </div>
      {isLoading ? (
        <div className="FullWidthCenteringContainer">
          <FontAwesomeIcon spin icon={faCircleNotch} size="3x" />
        </div>
      ) : holidayList.length > 0 ? (
        getFilteredHolidayList().map((holiday, index) => (
          <ModalTableRow key={index} onClick={() => handleSelect(holiday.name)}>
            {holiday.date}: {holiday.name}
          </ModalTableRow>
        ))
      ) : (
        <div className="FullWidthCenteringContainer">
          <div>No holidays found.</div>
        </div>
      )}
    </ReactModal>
  );
}
