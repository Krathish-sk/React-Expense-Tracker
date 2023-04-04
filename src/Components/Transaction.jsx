import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Transaction = (props) => {
  const { text, amount, id } = props.transaction;
  const sign = amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={amount > 0 ? "plus" : "minus"}>
        {text}{" "}
        <span>
          {sign} ₹{Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
