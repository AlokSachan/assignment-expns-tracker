import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate, useLocation } from 'react-router-dom';

const AddEditExpensePage = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { expense, index } = location.state || {};

  const initialValues = expense || { description: '', type: 'expense', amount: 0 };

  const onSubmit = (values) => {
    const newExpenses = expense
      ? expenses.map((exp, i) => i === index ? values : exp)
      : [...expenses, values];

    setExpenses(newExpenses);
    navigate('/');
  };

  return (
    <div className="expense-page-container">
      <div className="statement-title">{expense ? 'Edit' : 'Add'}</div>
      <ExpenseForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default AddEditExpensePage;
