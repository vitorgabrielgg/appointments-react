import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { Appointment } from "../src/Appointment";
describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Rodolfo" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");

    document.body.replaceChildren(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Rodolfo");
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jaquile" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");

    document.body.replaceChildren(container);

    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Jaquile");
  });
});
