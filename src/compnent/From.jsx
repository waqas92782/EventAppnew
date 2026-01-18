import React, { useState, useContext } from "react";
import "../App.css";
import { DataContext } from "../Context/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    guestNumber: "",
    adults: "",
    children: "",
    slipNumber: "",
  });

  const [dateTime, setDateTime] = useState(null); // combined date + time
  const { addRecord } = useContext(DataContext);

  // handle text/number inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dateTime) {
      toast.error("Please select date and time");
      return;
    }

    const isoDateTime = dateTime.toISOString();

    addRecord({ ...formData, dateTime: isoDateTime });

    // reset
    setFormData({
      guestName: "",
      guestNumber: "",
      adults: "",
      children: "",
      slipNumber: "",
    });
    setDateTime(null);

    toast.success("Your Record is saved!");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer position="top-right" autoClose={2000} />

      <form className="event-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="Mainheading">Event Guest Record</h2>

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

        {/* Styled React DatePicker */}
        <div className="row">
          <DatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select Date & Time"
            className="datepicker-input"
            required
          />
        </div>

        <button type="submit" className="savebtn">Save Record</button>
      </form>
    </div>
  );
};

export default Form;
