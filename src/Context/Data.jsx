import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataRecord, setDataRecord] = useState(() => {
    try {
      const storeData = localStorage.getItem("eventdata");
      return storeData ? JSON.parse(storeData) : [];
    } catch {
      return [];
    }
  });

  const addRecord = (newRecord) => {
    setDataRecord(prev => [...prev, { ...newRecord, id: Date.now() }]);
  };

  const deleteRecord = (id) => {
    setDataRecord(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("eventdata", JSON.stringify(dataRecord));
  }, [dataRecord]);

  return (
    <DataContext.Provider value={{ dataRecord, addRecord, deleteRecord }}>
      {children}
    </DataContext.Provider>
  );
};
