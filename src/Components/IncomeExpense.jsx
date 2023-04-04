import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(3);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(3);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -(1).toFixed(3);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+ ₹ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money-minus">- ₹ {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
