import React, { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
const Form = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    guestNumber: "",
    adults: "",
    children: "",
    slipNumber: "",
    dateTime: "",
  });

  const { addRecord } = useContext(DataContext);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(formData);

    setFormData({
      guestName: "",
      guestNumber: "",
      adults: "",
      children: "",
      slipNumber: "",
      dateTime: "",
    })
  };

  return (
    <div className="form-wrapper">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Event Guest Record</h2>

        <input
          type="text"
          name="guestName"
          placeholder="Guest Name"
          value={formData.guestName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="guestNumber"
          placeholder="Guest Phone Number"
          value={formData.guestNumber}
          onChange={handleChange}
          required
        />

        <div className="row">
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="slipNumber"
          placeholder="Slip Number"
          value={formData.slipNumber}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Record</button>
      </form>
    </div>
  );
};

export default Form;
