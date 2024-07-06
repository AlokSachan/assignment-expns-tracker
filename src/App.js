import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditExpensePage from './pages/AddEditExpensePage';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage expenses={expenses} setExpenses={setExpenses} />} />
        <Route path="/add" element={<AddEditExpensePage expenses={expenses} setExpenses={setExpenses} />} />
        <Route path="/edit" element={<AddEditExpensePage expenses={expenses} setExpenses={setExpenses} />} />
      </Routes>
    </Router>
  );
};

export default App;
