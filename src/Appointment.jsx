import React from "react";

export const Appointment = ({ customer }) => {
  return <div className="">{customer.firstName}</div>;
};

export const AppointmentsDayView = ({ appointments }) => {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment) => (
          <li key={appointment.startsAt}></li>
        ))}
      </ol>
    </div>
  );
};
