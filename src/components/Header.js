import React from 'react';

const Header = ({ income, expense }) => {
    const balance = income - expense;

    return (
        // <div className="headerClass">
        //     <div className="box">Income: {income}</div>
        //     <div className="box">Expense: {expense}</div>
        //     <div className="box">Balance: {balance}</div>
        // </div>
        <header>
            <div className="box-container">
                <div className="box">
                    <h2>Income: {income}</h2>
                </div>
                <div className="box">
                    <h2>Expense: {expense}</h2>
                </div>
                <div className="box">
                    <h2>Balance: {balance}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
