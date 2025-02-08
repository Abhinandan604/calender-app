import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import "./App.css";
import { listOfAvailableBackup } from "./backend/mongo";
import { formatDate, onClick } from "./App.service";

function tileClassName({ date, view }) {
  if (listOfAvailableBackup().includes(formatDate(date))) {
    return "highlight";
  }
}

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar App :</h1>
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={tileClassName}
          onClickDay={onClick}
        />
      </header>
    </div>
  );
}

export default App;