import React from "react";
import PropTypes from "prop-types";
import "./ExpenseDate.css";

const ExpenseDate = ({ dateProp }) => {
  const day = dateProp.toLocaleString("en-US", { day: "2-digit" });
  const month = dateProp.toLocaleString("en-US", { month: "long" });
  const year = dateProp.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
ExpenseDate.propTypes = {
  dateProp: PropTypes.string.isRequired,
};
export default ExpenseDate;
