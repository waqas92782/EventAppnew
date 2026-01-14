import { useContext } from "react";
import { DataContext } from "../Context/Data";
import "../App.css";

const Table = () => {
  const { dataRecord, deleteRecord } = useContext(DataContext);

  return (
    <div className="table-wrapper">
      <h2>Guest Records</h2>

      <div className="table-scroll">
        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Slip</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {dataRecord.map((item) => (
              <tr key={item.id}>
                <td>{item.guestName}</td>
                <td>{item.guestNumber}</td>
                <td>{item.adults}</td>
                <td>{item.children}</td>
                <td>{item.slipNumber}</td>
                <td>{item.dateTime}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteRecord(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
