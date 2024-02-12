import React from 'react';

const CalendarDay = ({ date, events, ...otherProps }) => {
  // events: Assume an array of event objects
  return (
    <div className="calendar-day" {...otherProps}>
      <p className="date">{date.getDate()}</p> 
      {/* Add styling for `.calendar-day` & `.date` as needed */}

      <ul className="events">
        {events.map((event) => (
          <li key={event.id}>{event.title} ({event.time})</li> 
        ))}
      </ul>
    </div>
  );
};

export default CalendarDay;
