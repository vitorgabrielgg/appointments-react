import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { Appointment, AppointmentsDayView } from "../src/Appointment";
describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

  it("renders the customer first name", () => {
    const customer = { firstName: "Rodolfo" };

    render(<Appointment customer={customer} />);

    expect(document.body.textContent).toContain("Rodolfo");
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jaquile" };

    render(<Appointment customer={customer} />);

    expect(document.body.textContent).toContain("Jaquile");
  });

  describe("AppointmentsDayView", () => {
    let container;
    beforeEach(() => {
      container = document.createElement("div");
      document.body.replaceChildren(container);
    });

    const render = (component) =>
      act(() => {
        ReactDOM.createRoot(container).render(component);
      });

    it("renders a div with right id", () => {
      render(<AppointmentsDayView appointments={[]} />);
      expect(
        document.body.querySelector("div#appointmentsDayView")
      ).not.toBeNull();
    });

    it("renders an ol element to display appointments", () => {
      render(<AppointmentsDayView appointments={[]} />);
      const listElement = document.querySelector("ol");
      expect(listElement).not.toBeNull();
    });

    it("renders an li for each appointment", () => {
      const today = new Date();
      const twoAppointments = [
        { startsAt: today.setHours(12, 0) },
        { startsAt: today.setHours(13, 0) },
      ];

      render(<AppointmentsDayView appointments={twoAppointments} />);
      const listChildren = document.querySelectorAll("ol > li");

      expect(listChildren).toHaveLength(2);
    });
  });
});
