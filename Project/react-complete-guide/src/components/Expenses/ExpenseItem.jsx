import React from "react";
import PropTypes from "prop-types";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ itemsProp }) => {
  return (
    <div className="expense-item">
      <ExpenseDate dateProp={itemsProp.date} />
      <div className="expense-item__description">
        <h2>{itemsProp.title}</h2>
        <div className="expense-item__price">${itemsProp.amount}</div>
      </div>
    </div>
  );
};
ExpenseItem.propTypes = {
  itemsProp: PropTypes.array.isRequired,
};
export default ExpenseItem;
