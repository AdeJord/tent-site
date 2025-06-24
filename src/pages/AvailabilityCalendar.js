import React, { useState, useEffect } from "react";
import { Root, StyledCalendarNavButton, CalendarContainer } from "../styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../calendarStyles.css";
import { useNavigate } from "react-router-dom";
import { addMonths, format, subMonths } from "date-fns";
import DangerModal from "../modal/DangerModal";
import Backdrop from "../modal/ModalBackdrop";

const CustomNavigation = ({ activeStartDate }) => {
  const currentMonth = format(activeStartDate, "MMMM yyyy");
  
  return (
    <div style={{ 
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#333',
      
    }}>
      <h1 style={{ margin: 0 }}>{currentMonth}</h1>
    </div>
  );
};

const AvailabilityCalendar = () => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [tripIsBeforeNow, setTripIsBeforeNow] = useState(false);
  const navigate = useNavigate();

  const ModalClickHandler = (event) => {
    setAlreadyBooked(false);
    setTripIsBeforeNow(false);
    event.stopPropagation();
  };

  const isMonthOutOfRange = (date) => {
    const month = date.getMonth();
    return month < 3 || month > 9; // January is 0, December is 11
  };

  useEffect(() => {
    fetch("https://adejord.co.uk/dates")
      .then((response) => response.json())
      .then((data) => setBookedDates(data))
      .then(() => console.log("Data fetched: ", bookedDates))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  function toLocalDateString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleDayClick = (date) => {
    // Convert to UTC midnight
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const currentDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    
    if (utcDate < currentDate) {
        setTripIsBeforeNow(true);
        return;
    }

    const dateString = utcDate.toISOString().split("T")[0];

    if (!bookedDates.includes(dateString)) {
        navigate(`/CreateBooking?date=${dateString}`);
    } else {
        setAlreadyBooked(true);
    }
  };

  return (
    <>
      {alreadyBooked && (
        <Backdrop onClick={ModalClickHandler}>
          <DangerModal
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "100",
            }}
            onClick={ModalClickHandler}
            header="Booking Unavailable!"
            content="This date is already booked."
            footer="Please select another date."
          />
        </Backdrop>
      )}

      {tripIsBeforeNow && (
        <Backdrop onClick={ModalClickHandler}>
          <DangerModal
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "100",
            }}
            onClick={ModalClickHandler}
            header="The date has already been and gone!"
            content="We can traverse the canals with ease, But unfortunately we cannot travel back in time."
            footer="Please select another date. (Preferably in the future)"
          />
        </Backdrop>
      )}

      <Root>
        <CalendarContainer>
          <Calendar
            activeStartDate={activeStartDate}
            onActiveStartDateChange={({ activeStartDate }) =>
              setActiveStartDate(activeStartDate || new Date())
            }
            className="customCalendar"
            navigationLabel={({ date, view }) => (
              <CustomNavigation
                activeStartDate={date}
                view={view}
              />
            )}
            tileDisabled={({ activeStartDate, date, view }) =>
              view === "month" && isMonthOutOfRange(date)
            }
            tileClassName={({ date, view }) => {
              if (view === "month") {
                const dateString = toLocalDateString(date);
                if (bookedDates.includes(dateString)) {
                  return "booked";
                } else if (isMonthOutOfRange(date)) {
                  return "not-operational";
                } else {
                  return "free";
                }
              }
            }}
            onClickDay={handleDayClick}
          />

          <div className="calendar-key">
            <div className="key-item">
              <span className="key-color not-operational"></span> Out Of Season
            </div>
            <div className="key-item">
              <span className="key-color free"></span> Available
            </div>
            <div className="key-item">
              <span className="key-color booked"></span> Booked
            </div>
          </div>
        </CalendarContainer>
      </Root>
    </>
  );
};

export default AvailabilityCalendar;