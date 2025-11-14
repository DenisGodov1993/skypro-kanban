import { useState } from "react";
import {
  CalendarWrapper,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarP,
} from "./Calendar.styled";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const daysNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const Calendar = () => {
  const [date, setDate] = useState(new Date(2025, 9));
  const [selectedDate, setSelectedDate] = useState(null); // выбранная дата

  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startOffset = (firstDayOfMonth + 6) % 7; // делаем пн = 0

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrev = () => setDate(new Date(year, month - 1));
  const handleNext = () => setDate(new Date(year, month + 1));

  const handleSelectDate = (day) => {
    const selected = new Date(year, month, day);
    setSelectedDate(selected);
  };

  const formatDate = (d) => {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };

  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>

      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>{`${monthNames[month]} ${year}`}</CalendarMonth>
          <NavActions>
            <NavAction onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={6}
                height={11}
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={6}
                height={11}
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>

        <CalendarContent>
          <CalendarDaysNames>
            {daysNames.map((day, i) => (
              <CalendarDayName key={i}>{day}</CalendarDayName>
            ))}
          </CalendarDaysNames>

          <CalendarCells>
            {/* пустые ячейки перед началом месяца */}
            {Array.from({ length: startOffset }).map((_, i) => (
              <CalendarCell key={`empty-${i}`} />
            ))}

            {/* дни текущего месяца */}
            {days.map((num, i) => {
              const current = new Date(year, month, num);
              const isSelected =
                selectedDate &&
                current.toDateString() === selectedDate.toDateString();

              return (
                <CalendarCell
                  key={i}
                  className={`_cell-day ${isSelected ? "_active-day" : ""}`}
                  onClick={() => handleSelectDate(num)}
                >
                  {num}
                </CalendarCell>
              );
            })}
          </CalendarCells>
        </CalendarContent>

        <input
          type="hidden"
          id="datepick_value"
          value={selectedDate ? formatDate(selectedDate) : ""}
        />

        <CalendarPeriod>
          <CalendarP>
            {selectedDate ? (
              <>
                Вы выбрали дату: <b>{formatDate(selectedDate)}</b>
              </>
            ) : (
              <>
                Выберите срок исполнения <span className="date-control" />.
              </>
            )}
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

export default Calendar;
