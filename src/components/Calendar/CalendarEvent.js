import React from 'react';

// This would primarily be a styling/presentation component

const CalendarEvent = ({ title, time, ...otherProps }) => {
  return (
    <div className="calendar-event" {...otherProps}> 
      {/* Consider how you want to visually represent the event */}
      <span className="title">{title}</span>
      <span className="time">{time}</span> 
    </div>
  );
};

export default CalendarEvent;
