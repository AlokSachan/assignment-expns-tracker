import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {() => (
      <Form className="expense-form">
        <div className="form-group">
          <label className="form-label">Description:</label>
          <Field className="form-field" name="description" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Type:</label>
          <Field className="form-field" name="type" as="select">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Field>
        </div>
        <div className="form-group">
          <label className="form-label">Amount</label>
          <Field className="form-field" name="amount" type="number" />
        </div>
        <button className="form-button" type="submit">Save</button>
      </Form>
    )}
  </Formik>
);

export default ExpenseForm;
