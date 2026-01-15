import React, { useState, useContext } from "react";
import "../App.css";
import { DataContext } from "../Context/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    guestNumber: "",
    adults: "",
    children: "",
    slipNumber: "",
    date: "", // new field for date
    time: "", // new field for time
  });

  const { addRecord } = useContext(DataContext);

  // dynamic handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // combine date + time into ISO datetime
    const dateTime = `${formData.date}T${formData.time}`;

    // send to context
    addRecord({ ...formData, dateTime });

    // reset form
    setFormData({
      guestName: "",
      guestNumber: "",
      adults: "",
      children: "",
      slipNumber: "",
      date: "",
      time: "",
    });

    toast.success("Your Record is saved!");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer position="top-right" autoClose={2000} />

      <form className="event-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Event Guest Record</h2>

        <input
          type="text"
          name="guestName"
          placeholder="Guest Name"
          value={formData.guestName}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <input
          type="tel"
          name="guestNumber"
          placeholder="Guest Phone Number"
          value={formData.guestNumber}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <div className="row">
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <input
          type="text"
          name="slipNumber"
          placeholder="Slip Number"
          value={formData.slipNumber}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        {/* ✅ Split date + time inputs for mobile compatibility */}
        <div className="row">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save Record</button>
      </form>
    </div>
  );
};

export default Form;
