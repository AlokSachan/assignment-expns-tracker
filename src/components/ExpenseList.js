import React from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, onEdit, onDelete, onRowClick }) => (
  <div className="expense-list-container">
    <div className="statement-title">Statement</div>
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      {/* <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} onClick={() => onRowClick(index)}>
   */}
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} onClick={() => onRowClick && onRowClick(index)}>
            <td>{expense.description}</td>
            <td>{expense.type === 'income' ? '+' : '-'} {expense.amount}</td>
            <td>
              <button onClick={(e) => { e.stopPropagation(); onEdit(index); }}>Edit</button>
              <button onClick={(e) => { e.stopPropagation(); onDelete(index); }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseList;
