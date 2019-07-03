import React from 'react';
import './calendar.css';
import moment from "moment"
class Calendar extends React.Component {
  state = {
    m: moment()
  };

  render(){
    return (
      <div className="calendar">
        <h1 className="month">{this.state.m.format("dddd, MMMM Do YYYY, h:mm:ss a")}</h1>
        <h1 className="month">July</h1>
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map(name => <div className="week">{name}</div>)}
        {[...Array(31).keys()].map(n => <div className="day">{n + 1}</div>)}
      </div>
    )
  }
}

export default Calendar;
