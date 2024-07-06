import React from 'react';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import addExpenseImg from '../images/add.jpeg'; // Import the image
import '../styles/HomePage.css';

const HomePage = ({ expenses, setExpenses }) => {
    const navigate = useNavigate();
    const location = useLocation();
  const income = expenses.filter(exp => exp.type === 'income').reduce((acc, exp) => acc + exp.amount, 0);
  const expense = expenses.filter(exp => exp.type === 'expense').reduce((acc, exp) => acc + exp.amount, 0);

  const deleteExpense = index => {
    console.log('delete expense at index', index);
    setExpenses(expenses.filter((_, i) => i !== index));
  };
  const editExpnse = index => {
    console.log('edit expense at index', index);
    navigate('/edit', { state: { expense: expenses[index], index } });
    // const newExpenses = expenses.filter((_, i) => i !== index);
    // setExpenses(newExpenses);
  };
  const handleRowClick = (index) => {
    // Logic for handling row click
    console.log('Row clicked at index', index);
  };

  return (
    <div>
      <Header income={income} expense={expense} />
      <ExpenseList 
      expenses={expenses} 
      onEdit={editExpnse} 
      onDelete={deleteExpense} 
      onRowClick={handleRowClick}/>
      {/* <Link to="/add">Add Expense</Link> */}
      <div className="center-button">
      <Link to="/add">
        <img src={addExpenseImg} alt="Add Expense" style={{ alignItems: 'center', width: '50px', height: '50px' }} />
      </Link>
      </div>     
    </div>
  );
};

export default HomePage;
