import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);


  // Add Expense
  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // Total Calculation
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add</button>
      </div>

      <h3>Total: ₹{total}</h3>

      {expenses.length === 0 && <p>No expenses added</p>}

      {expenses.map((item) => (
        <div key={item.id} className="expense-item">
          <span>{item.title}</span>
          <span>₹{item.amount}</span>
          <button onClick={() => deleteExpense(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;